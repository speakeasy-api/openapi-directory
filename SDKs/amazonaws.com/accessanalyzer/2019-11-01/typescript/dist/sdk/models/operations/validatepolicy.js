"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePolicyResponse = exports.ValidatePolicyRequest = exports.ValidatePolicyRequestBody = exports.ValidatePolicyRequestBodyPolicyTypeEnum = exports.ValidatePolicyRequestBodyLocaleEnum = exports.ValidatePolicyHeaders = exports.ValidatePolicyQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ValidatePolicyQueryParams = /** @class */ (function (_super) {
    __extends(ValidatePolicyQueryParams, _super);
    function ValidatePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ValidatePolicyQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ValidatePolicyQueryParams.prototype, "nextToken", void 0);
    return ValidatePolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.ValidatePolicyQueryParams = ValidatePolicyQueryParams;
var ValidatePolicyHeaders = /** @class */ (function (_super) {
    __extends(ValidatePolicyHeaders, _super);
    function ValidatePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ValidatePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ValidatePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ValidatePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ValidatePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ValidatePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ValidatePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ValidatePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ValidatePolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.ValidatePolicyHeaders = ValidatePolicyHeaders;
var ValidatePolicyRequestBodyLocaleEnum;
(function (ValidatePolicyRequestBodyLocaleEnum) {
    ValidatePolicyRequestBodyLocaleEnum["De"] = "DE";
    ValidatePolicyRequestBodyLocaleEnum["En"] = "EN";
    ValidatePolicyRequestBodyLocaleEnum["Es"] = "ES";
    ValidatePolicyRequestBodyLocaleEnum["Fr"] = "FR";
    ValidatePolicyRequestBodyLocaleEnum["It"] = "IT";
    ValidatePolicyRequestBodyLocaleEnum["Ja"] = "JA";
    ValidatePolicyRequestBodyLocaleEnum["Ko"] = "KO";
    ValidatePolicyRequestBodyLocaleEnum["PtBr"] = "PT_BR";
    ValidatePolicyRequestBodyLocaleEnum["ZhCn"] = "ZH_CN";
    ValidatePolicyRequestBodyLocaleEnum["ZhTw"] = "ZH_TW";
})(ValidatePolicyRequestBodyLocaleEnum = exports.ValidatePolicyRequestBodyLocaleEnum || (exports.ValidatePolicyRequestBodyLocaleEnum = {}));
var ValidatePolicyRequestBodyPolicyTypeEnum;
(function (ValidatePolicyRequestBodyPolicyTypeEnum) {
    ValidatePolicyRequestBodyPolicyTypeEnum["IdentityPolicy"] = "IDENTITY_POLICY";
    ValidatePolicyRequestBodyPolicyTypeEnum["ResourcePolicy"] = "RESOURCE_POLICY";
    ValidatePolicyRequestBodyPolicyTypeEnum["ServiceControlPolicy"] = "SERVICE_CONTROL_POLICY";
})(ValidatePolicyRequestBodyPolicyTypeEnum = exports.ValidatePolicyRequestBodyPolicyTypeEnum || (exports.ValidatePolicyRequestBodyPolicyTypeEnum = {}));
var ValidatePolicyRequestBody = /** @class */ (function (_super) {
    __extends(ValidatePolicyRequestBody, _super);
    function ValidatePolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], ValidatePolicyRequestBody.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyDocument" }),
        __metadata("design:type", String)
    ], ValidatePolicyRequestBody.prototype, "policyDocument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyType" }),
        __metadata("design:type", String)
    ], ValidatePolicyRequestBody.prototype, "policyType", void 0);
    return ValidatePolicyRequestBody;
}(utils_1.SpeakeasyBase));
exports.ValidatePolicyRequestBody = ValidatePolicyRequestBody;
var ValidatePolicyRequest = /** @class */ (function (_super) {
    __extends(ValidatePolicyRequest, _super);
    function ValidatePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ValidatePolicyQueryParams)
    ], ValidatePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ValidatePolicyHeaders)
    ], ValidatePolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ValidatePolicyRequestBody)
    ], ValidatePolicyRequest.prototype, "request", void 0);
    return ValidatePolicyRequest;
}(utils_1.SpeakeasyBase));
exports.ValidatePolicyRequest = ValidatePolicyRequest;
var ValidatePolicyResponse = /** @class */ (function (_super) {
    __extends(ValidatePolicyResponse, _super);
    function ValidatePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ValidatePolicyResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ValidatePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ValidatePolicyResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ValidatePolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ValidatePolicyResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidatePolicyResponse)
    ], ValidatePolicyResponse.prototype, "validatePolicyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ValidatePolicyResponse.prototype, "validationException", void 0);
    return ValidatePolicyResponse;
}(utils_1.SpeakeasyBase));
exports.ValidatePolicyResponse = ValidatePolicyResponse;

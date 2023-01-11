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
exports.SetDataRetrievalPolicyResponse = exports.SetDataRetrievalPolicyRequest = exports.SetDataRetrievalPolicyRequestBody = exports.SetDataRetrievalPolicyRequestBodyPolicy = exports.SetDataRetrievalPolicyHeaders = exports.SetDataRetrievalPolicyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SetDataRetrievalPolicyPathParams = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyPathParams, _super);
    function SetDataRetrievalPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyPathParams.prototype, "accountId", void 0);
    return SetDataRetrievalPolicyPathParams;
}(utils_1.SpeakeasyBase));
exports.SetDataRetrievalPolicyPathParams = SetDataRetrievalPolicyPathParams;
var SetDataRetrievalPolicyHeaders = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyHeaders, _super);
    function SetDataRetrievalPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SetDataRetrievalPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.SetDataRetrievalPolicyHeaders = SetDataRetrievalPolicyHeaders;
// SetDataRetrievalPolicyRequestBodyPolicy
/**
 * Data retrieval policy.
**/
var SetDataRetrievalPolicyRequestBodyPolicy = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyRequestBodyPolicy, _super);
    function SetDataRetrievalPolicyRequestBodyPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Rules", elemType: shared.DataRetrievalRule }),
        __metadata("design:type", Array)
    ], SetDataRetrievalPolicyRequestBodyPolicy.prototype, "rules", void 0);
    return SetDataRetrievalPolicyRequestBodyPolicy;
}(utils_1.SpeakeasyBase));
exports.SetDataRetrievalPolicyRequestBodyPolicy = SetDataRetrievalPolicyRequestBodyPolicy;
var SetDataRetrievalPolicyRequestBody = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyRequestBody, _super);
    function SetDataRetrievalPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Policy" }),
        __metadata("design:type", SetDataRetrievalPolicyRequestBodyPolicy)
    ], SetDataRetrievalPolicyRequestBody.prototype, "policy", void 0);
    return SetDataRetrievalPolicyRequestBody;
}(utils_1.SpeakeasyBase));
exports.SetDataRetrievalPolicyRequestBody = SetDataRetrievalPolicyRequestBody;
var SetDataRetrievalPolicyRequest = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyRequest, _super);
    function SetDataRetrievalPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetDataRetrievalPolicyPathParams)
    ], SetDataRetrievalPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SetDataRetrievalPolicyHeaders)
    ], SetDataRetrievalPolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetDataRetrievalPolicyRequestBody)
    ], SetDataRetrievalPolicyRequest.prototype, "request", void 0);
    return SetDataRetrievalPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.SetDataRetrievalPolicyRequest = SetDataRetrievalPolicyRequest;
var SetDataRetrievalPolicyResponse = /** @class */ (function (_super) {
    __extends(SetDataRetrievalPolicyResponse, _super);
    function SetDataRetrievalPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SetDataRetrievalPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SetDataRetrievalPolicyResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SetDataRetrievalPolicyResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SetDataRetrievalPolicyResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SetDataRetrievalPolicyResponse.prototype, "statusCode", void 0);
    return SetDataRetrievalPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.SetDataRetrievalPolicyResponse = SetDataRetrievalPolicyResponse;

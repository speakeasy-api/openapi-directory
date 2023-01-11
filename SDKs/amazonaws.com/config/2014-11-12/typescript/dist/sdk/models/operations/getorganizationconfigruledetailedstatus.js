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
exports.GetOrganizationConfigRuleDetailedStatusResponse = exports.GetOrganizationConfigRuleDetailedStatusRequest = exports.GetOrganizationConfigRuleDetailedStatusHeaders = exports.GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum = exports.GetOrganizationConfigRuleDetailedStatusQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetOrganizationConfigRuleDetailedStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigRuleDetailedStatusQueryParams, _super);
    function GetOrganizationConfigRuleDetailedStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusQueryParams.prototype, "nextToken", void 0);
    return GetOrganizationConfigRuleDetailedStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigRuleDetailedStatusQueryParams = GetOrganizationConfigRuleDetailedStatusQueryParams;
var GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum;
(function (GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum) {
    GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum["StarlingDoveServiceGetOrganizationConfigRuleDetailedStatus"] = "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus";
})(GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum = exports.GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum || (exports.GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum = {}));
var GetOrganizationConfigRuleDetailedStatusHeaders = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigRuleDetailedStatusHeaders, _super);
    function GetOrganizationConfigRuleDetailedStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusHeaders.prototype, "xAmzTarget", void 0);
    return GetOrganizationConfigRuleDetailedStatusHeaders;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigRuleDetailedStatusHeaders = GetOrganizationConfigRuleDetailedStatusHeaders;
var GetOrganizationConfigRuleDetailedStatusRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigRuleDetailedStatusRequest, _super);
    function GetOrganizationConfigRuleDetailedStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationConfigRuleDetailedStatusQueryParams)
    ], GetOrganizationConfigRuleDetailedStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationConfigRuleDetailedStatusHeaders)
    ], GetOrganizationConfigRuleDetailedStatusRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetOrganizationConfigRuleDetailedStatusRequest)
    ], GetOrganizationConfigRuleDetailedStatusRequest.prototype, "request", void 0);
    return GetOrganizationConfigRuleDetailedStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigRuleDetailedStatusRequest = GetOrganizationConfigRuleDetailedStatusRequest;
var GetOrganizationConfigRuleDetailedStatusResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigRuleDetailedStatusResponse, _super);
    function GetOrganizationConfigRuleDetailedStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationConfigRuleDetailedStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetOrganizationConfigRuleDetailedStatusResponse)
    ], GetOrganizationConfigRuleDetailedStatusResponse.prototype, "getOrganizationConfigRuleDetailedStatusResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationConfigRuleDetailedStatusResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationConfigRuleDetailedStatusResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationConfigRuleDetailedStatusResponse.prototype, "noSuchOrganizationConfigRuleException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationConfigRuleDetailedStatusResponse.prototype, "organizationAccessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationConfigRuleDetailedStatusResponse.prototype, "statusCode", void 0);
    return GetOrganizationConfigRuleDetailedStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigRuleDetailedStatusResponse = GetOrganizationConfigRuleDetailedStatusResponse;

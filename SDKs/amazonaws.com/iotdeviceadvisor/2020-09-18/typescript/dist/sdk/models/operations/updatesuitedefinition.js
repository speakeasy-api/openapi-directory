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
exports.UpdateSuiteDefinitionResponse = exports.UpdateSuiteDefinitionRequest = exports.UpdateSuiteDefinitionRequestBody = exports.UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration = exports.UpdateSuiteDefinitionHeaders = exports.UpdateSuiteDefinitionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSuiteDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UpdateSuiteDefinitionPathParams, _super);
    function UpdateSuiteDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=suiteDefinitionId" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionPathParams.prototype, "suiteDefinitionId", void 0);
    return UpdateSuiteDefinitionPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSuiteDefinitionPathParams = UpdateSuiteDefinitionPathParams;
var UpdateSuiteDefinitionHeaders = /** @class */ (function (_super) {
    __extends(UpdateSuiteDefinitionHeaders, _super);
    function UpdateSuiteDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSuiteDefinitionHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateSuiteDefinitionHeaders = UpdateSuiteDefinitionHeaders;
// UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
/**
 * Gets Suite Definition Configuration.
**/
var UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration = /** @class */ (function (_super) {
    __extends(UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration, _super);
    function UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devicePermissionRoleArn" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration.prototype, "devicePermissionRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devices", elemType: shared.DeviceUnderTest }),
        __metadata("design:type", Array)
    ], UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration.prototype, "devices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intendedForQualification" }),
        __metadata("design:type", Boolean)
    ], UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration.prototype, "intendedForQualification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rootGroup" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration.prototype, "rootGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suiteDefinitionName" }),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration.prototype, "suiteDefinitionName", void 0);
    return UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
}(utils_1.SpeakeasyBase));
exports.UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration = UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
var UpdateSuiteDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSuiteDefinitionRequestBody, _super);
    function UpdateSuiteDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suiteDefinitionConfiguration" }),
        __metadata("design:type", UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration)
    ], UpdateSuiteDefinitionRequestBody.prototype, "suiteDefinitionConfiguration", void 0);
    return UpdateSuiteDefinitionRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateSuiteDefinitionRequestBody = UpdateSuiteDefinitionRequestBody;
var UpdateSuiteDefinitionRequest = /** @class */ (function (_super) {
    __extends(UpdateSuiteDefinitionRequest, _super);
    function UpdateSuiteDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSuiteDefinitionPathParams)
    ], UpdateSuiteDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSuiteDefinitionHeaders)
    ], UpdateSuiteDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSuiteDefinitionRequestBody)
    ], UpdateSuiteDefinitionRequest.prototype, "request", void 0);
    return UpdateSuiteDefinitionRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSuiteDefinitionRequest = UpdateSuiteDefinitionRequest;
var UpdateSuiteDefinitionResponse = /** @class */ (function (_super) {
    __extends(UpdateSuiteDefinitionResponse, _super);
    function UpdateSuiteDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSuiteDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSuiteDefinitionResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSuiteDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateSuiteDefinitionResponse)
    ], UpdateSuiteDefinitionResponse.prototype, "updateSuiteDefinitionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSuiteDefinitionResponse.prototype, "validationException", void 0);
    return UpdateSuiteDefinitionResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSuiteDefinitionResponse = UpdateSuiteDefinitionResponse;

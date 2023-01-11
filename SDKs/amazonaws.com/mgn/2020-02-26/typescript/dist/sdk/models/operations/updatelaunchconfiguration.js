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
exports.UpdateLaunchConfigurationResponse = exports.UpdateLaunchConfigurationRequest = exports.UpdateLaunchConfigurationRequestBody = exports.UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = exports.UpdateLaunchConfigurationRequestBodyLicensing = exports.UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = exports.UpdateLaunchConfigurationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateLaunchConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationHeaders, _super);
    function UpdateLaunchConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLaunchConfigurationHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchConfigurationHeaders = UpdateLaunchConfigurationHeaders;
var UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
(function (UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum) {
    UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum["Stopped"] = "STOPPED";
    UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum["Started"] = "STARTED";
})(UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = exports.UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum || (exports.UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum = {}));
// UpdateLaunchConfigurationRequestBodyLicensing
/**
 * Configure Licensing.
**/
var UpdateLaunchConfigurationRequestBodyLicensing = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationRequestBodyLicensing, _super);
    function UpdateLaunchConfigurationRequestBodyLicensing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=osByol" }),
        __metadata("design:type", Boolean)
    ], UpdateLaunchConfigurationRequestBodyLicensing.prototype, "osByol", void 0);
    return UpdateLaunchConfigurationRequestBodyLicensing;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchConfigurationRequestBodyLicensing = UpdateLaunchConfigurationRequestBodyLicensing;
var UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
(function (UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum) {
    UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum["None"] = "NONE";
    UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum["Basic"] = "BASIC";
})(UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = exports.UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum || (exports.UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum = {}));
var UpdateLaunchConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationRequestBody, _super);
    function UpdateLaunchConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyPrivateIp" }),
        __metadata("design:type", Boolean)
    ], UpdateLaunchConfigurationRequestBody.prototype, "copyPrivateIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyTags" }),
        __metadata("design:type", Boolean)
    ], UpdateLaunchConfigurationRequestBody.prototype, "copyTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=launchDisposition" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "launchDisposition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=licensing" }),
        __metadata("design:type", UpdateLaunchConfigurationRequestBodyLicensing)
    ], UpdateLaunchConfigurationRequestBody.prototype, "licensing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceServerID" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "sourceServerID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetInstanceTypeRightSizingMethod" }),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationRequestBody.prototype, "targetInstanceTypeRightSizingMethod", void 0);
    return UpdateLaunchConfigurationRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchConfigurationRequestBody = UpdateLaunchConfigurationRequestBody;
var UpdateLaunchConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationRequest, _super);
    function UpdateLaunchConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateLaunchConfigurationHeaders)
    ], UpdateLaunchConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLaunchConfigurationRequestBody)
    ], UpdateLaunchConfigurationRequest.prototype, "request", void 0);
    return UpdateLaunchConfigurationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchConfigurationRequest = UpdateLaunchConfigurationRequest;
var UpdateLaunchConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateLaunchConfigurationResponse, _super);
    function UpdateLaunchConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateLaunchConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LaunchConfiguration)
    ], UpdateLaunchConfigurationResponse.prototype, "launchConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateLaunchConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "uninitializedAccountException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchConfigurationResponse.prototype, "validationException", void 0);
    return UpdateLaunchConfigurationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchConfigurationResponse = UpdateLaunchConfigurationResponse;

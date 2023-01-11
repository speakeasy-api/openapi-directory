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
exports.UpdatePortalResponse = exports.UpdatePortalRequest = exports.UpdatePortalRequestBody = exports.UpdatePortalRequestBodyPortalLogoImage = exports.UpdatePortalRequestBodyAlarms = exports.UpdatePortalHeaders = exports.UpdatePortalPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePortalPathParams = /** @class */ (function (_super) {
    __extends(UpdatePortalPathParams, _super);
    function UpdatePortalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=portalId" }),
        __metadata("design:type", String)
    ], UpdatePortalPathParams.prototype, "portalId", void 0);
    return UpdatePortalPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePortalPathParams = UpdatePortalPathParams;
var UpdatePortalHeaders = /** @class */ (function (_super) {
    __extends(UpdatePortalHeaders, _super);
    function UpdatePortalHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePortalHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePortalHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePortalHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePortalHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePortalHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePortalHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePortalHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdatePortalHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdatePortalHeaders = UpdatePortalHeaders;
// UpdatePortalRequestBodyAlarms
/**
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
var UpdatePortalRequestBodyAlarms = /** @class */ (function (_super) {
    __extends(UpdatePortalRequestBodyAlarms, _super);
    function UpdatePortalRequestBodyAlarms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alarmRoleArn" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBodyAlarms.prototype, "alarmRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notificationLambdaArn" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBodyAlarms.prototype, "notificationLambdaArn", void 0);
    return UpdatePortalRequestBodyAlarms;
}(utils_1.SpeakeasyBase));
exports.UpdatePortalRequestBodyAlarms = UpdatePortalRequestBodyAlarms;
// UpdatePortalRequestBodyPortalLogoImage
/**
 * <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
**/
var UpdatePortalRequestBodyPortalLogoImage = /** @class */ (function (_super) {
    __extends(UpdatePortalRequestBodyPortalLogoImage, _super);
    function UpdatePortalRequestBodyPortalLogoImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file" }),
        __metadata("design:type", shared.ImageFile)
    ], UpdatePortalRequestBodyPortalLogoImage.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBodyPortalLogoImage.prototype, "id", void 0);
    return UpdatePortalRequestBodyPortalLogoImage;
}(utils_1.SpeakeasyBase));
exports.UpdatePortalRequestBodyPortalLogoImage = UpdatePortalRequestBodyPortalLogoImage;
var UpdatePortalRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePortalRequestBody, _super);
    function UpdatePortalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alarms" }),
        __metadata("design:type", UpdatePortalRequestBodyAlarms)
    ], UpdatePortalRequestBody.prototype, "alarms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notificationSenderEmail" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBody.prototype, "notificationSenderEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portalContactEmail" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBody.prototype, "portalContactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portalDescription" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBody.prototype, "portalDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portalLogoImage" }),
        __metadata("design:type", UpdatePortalRequestBodyPortalLogoImage)
    ], UpdatePortalRequestBody.prototype, "portalLogoImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portalName" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBody.prototype, "portalName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdatePortalRequestBody.prototype, "roleArn", void 0);
    return UpdatePortalRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdatePortalRequestBody = UpdatePortalRequestBody;
var UpdatePortalRequest = /** @class */ (function (_super) {
    __extends(UpdatePortalRequest, _super);
    function UpdatePortalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortalPathParams)
    ], UpdatePortalRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortalHeaders)
    ], UpdatePortalRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePortalRequestBody)
    ], UpdatePortalRequest.prototype, "request", void 0);
    return UpdatePortalRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePortalRequest = UpdatePortalRequest;
var UpdatePortalResponse = /** @class */ (function (_super) {
    __extends(UpdatePortalResponse, _super);
    function UpdatePortalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortalResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePortalResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortalResponse.prototype, "internalFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortalResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortalResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePortalResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdatePortalResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdatePortalResponse)
    ], UpdatePortalResponse.prototype, "updatePortalResponse", void 0);
    return UpdatePortalResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePortalResponse = UpdatePortalResponse;

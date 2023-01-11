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
exports.UpdateBotLocaleResponse = exports.UpdateBotLocaleRequest = exports.UpdateBotLocaleRequestBody = exports.UpdateBotLocaleRequestBodyVoiceSettings = exports.UpdateBotLocaleHeaders = exports.UpdateBotLocalePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateBotLocalePathParams = /** @class */ (function (_super) {
    __extends(UpdateBotLocalePathParams, _super);
    function UpdateBotLocalePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], UpdateBotLocalePathParams.prototype, "botId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], UpdateBotLocalePathParams.prototype, "botVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], UpdateBotLocalePathParams.prototype, "localeId", void 0);
    return UpdateBotLocalePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateBotLocalePathParams = UpdateBotLocalePathParams;
var UpdateBotLocaleHeaders = /** @class */ (function (_super) {
    __extends(UpdateBotLocaleHeaders, _super);
    function UpdateBotLocaleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBotLocaleHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateBotLocaleHeaders = UpdateBotLocaleHeaders;
// UpdateBotLocaleRequestBodyVoiceSettings
/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
var UpdateBotLocaleRequestBodyVoiceSettings = /** @class */ (function (_super) {
    __extends(UpdateBotLocaleRequestBodyVoiceSettings, _super);
    function UpdateBotLocaleRequestBodyVoiceSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voiceId" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleRequestBodyVoiceSettings.prototype, "voiceId", void 0);
    return UpdateBotLocaleRequestBodyVoiceSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBotLocaleRequestBodyVoiceSettings = UpdateBotLocaleRequestBodyVoiceSettings;
var UpdateBotLocaleRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBotLocaleRequestBody, _super);
    function UpdateBotLocaleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateBotLocaleRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nluIntentConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], UpdateBotLocaleRequestBody.prototype, "nluIntentConfidenceThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voiceSettings" }),
        __metadata("design:type", UpdateBotLocaleRequestBodyVoiceSettings)
    ], UpdateBotLocaleRequestBody.prototype, "voiceSettings", void 0);
    return UpdateBotLocaleRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateBotLocaleRequestBody = UpdateBotLocaleRequestBody;
var UpdateBotLocaleRequest = /** @class */ (function (_super) {
    __extends(UpdateBotLocaleRequest, _super);
    function UpdateBotLocaleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBotLocalePathParams)
    ], UpdateBotLocaleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBotLocaleHeaders)
    ], UpdateBotLocaleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBotLocaleRequestBody)
    ], UpdateBotLocaleRequest.prototype, "request", void 0);
    return UpdateBotLocaleRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateBotLocaleRequest = UpdateBotLocaleRequest;
var UpdateBotLocaleResponse = /** @class */ (function (_super) {
    __extends(UpdateBotLocaleResponse, _super);
    function UpdateBotLocaleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotLocaleResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateBotLocaleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotLocaleResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotLocaleResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotLocaleResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateBotLocaleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotLocaleResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateBotLocaleResponse)
    ], UpdateBotLocaleResponse.prototype, "updateBotLocaleResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotLocaleResponse.prototype, "validationException", void 0);
    return UpdateBotLocaleResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateBotLocaleResponse = UpdateBotLocaleResponse;

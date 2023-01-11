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
exports.UpdateBotAliasResponse = exports.UpdateBotAliasRequest = exports.UpdateBotAliasRequestBody = exports.UpdateBotAliasRequestBodySentimentAnalysisSettings = exports.UpdateBotAliasRequestBodyConversationLogSettings = exports.UpdateBotAliasHeaders = exports.UpdateBotAliasPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateBotAliasPathParams = /** @class */ (function (_super) {
    __extends(UpdateBotAliasPathParams, _super);
    function UpdateBotAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botAliasId" }),
        __metadata("design:type", String)
    ], UpdateBotAliasPathParams.prototype, "botAliasId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], UpdateBotAliasPathParams.prototype, "botId", void 0);
    return UpdateBotAliasPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateBotAliasPathParams = UpdateBotAliasPathParams;
var UpdateBotAliasHeaders = /** @class */ (function (_super) {
    __extends(UpdateBotAliasHeaders, _super);
    function UpdateBotAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBotAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBotAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBotAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBotAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBotAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBotAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBotAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBotAliasHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateBotAliasHeaders = UpdateBotAliasHeaders;
// UpdateBotAliasRequestBodyConversationLogSettings
/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
var UpdateBotAliasRequestBodyConversationLogSettings = /** @class */ (function (_super) {
    __extends(UpdateBotAliasRequestBodyConversationLogSettings, _super);
    function UpdateBotAliasRequestBodyConversationLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting }),
        __metadata("design:type", Array)
    ], UpdateBotAliasRequestBodyConversationLogSettings.prototype, "audioLogSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting }),
        __metadata("design:type", Array)
    ], UpdateBotAliasRequestBodyConversationLogSettings.prototype, "textLogSettings", void 0);
    return UpdateBotAliasRequestBodyConversationLogSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBotAliasRequestBodyConversationLogSettings = UpdateBotAliasRequestBodyConversationLogSettings;
// UpdateBotAliasRequestBodySentimentAnalysisSettings
/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
var UpdateBotAliasRequestBodySentimentAnalysisSettings = /** @class */ (function (_super) {
    __extends(UpdateBotAliasRequestBodySentimentAnalysisSettings, _super);
    function UpdateBotAliasRequestBodySentimentAnalysisSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detectSentiment" }),
        __metadata("design:type", Boolean)
    ], UpdateBotAliasRequestBodySentimentAnalysisSettings.prototype, "detectSentiment", void 0);
    return UpdateBotAliasRequestBodySentimentAnalysisSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBotAliasRequestBodySentimentAnalysisSettings = UpdateBotAliasRequestBodySentimentAnalysisSettings;
var UpdateBotAliasRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBotAliasRequestBody, _super);
    function UpdateBotAliasRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings }),
        __metadata("design:type", Object)
    ], UpdateBotAliasRequestBody.prototype, "botAliasLocaleSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botAliasName" }),
        __metadata("design:type", String)
    ], UpdateBotAliasRequestBody.prototype, "botAliasName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], UpdateBotAliasRequestBody.prototype, "botVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversationLogSettings" }),
        __metadata("design:type", UpdateBotAliasRequestBodyConversationLogSettings)
    ], UpdateBotAliasRequestBody.prototype, "conversationLogSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateBotAliasRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sentimentAnalysisSettings" }),
        __metadata("design:type", UpdateBotAliasRequestBodySentimentAnalysisSettings)
    ], UpdateBotAliasRequestBody.prototype, "sentimentAnalysisSettings", void 0);
    return UpdateBotAliasRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateBotAliasRequestBody = UpdateBotAliasRequestBody;
var UpdateBotAliasRequest = /** @class */ (function (_super) {
    __extends(UpdateBotAliasRequest, _super);
    function UpdateBotAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBotAliasPathParams)
    ], UpdateBotAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBotAliasHeaders)
    ], UpdateBotAliasRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBotAliasRequestBody)
    ], UpdateBotAliasRequest.prototype, "request", void 0);
    return UpdateBotAliasRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateBotAliasRequest = UpdateBotAliasRequest;
var UpdateBotAliasResponse = /** @class */ (function (_super) {
    __extends(UpdateBotAliasResponse, _super);
    function UpdateBotAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotAliasResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateBotAliasResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotAliasResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotAliasResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotAliasResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateBotAliasResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotAliasResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateBotAliasResponse)
    ], UpdateBotAliasResponse.prototype, "updateBotAliasResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBotAliasResponse.prototype, "validationException", void 0);
    return UpdateBotAliasResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateBotAliasResponse = UpdateBotAliasResponse;

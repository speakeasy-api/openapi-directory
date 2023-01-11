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
exports.CreateBotAliasResponse = exports.CreateBotAliasRequest = exports.CreateBotAliasRequestBody = exports.CreateBotAliasRequestBodySentimentAnalysisSettings = exports.CreateBotAliasRequestBodyConversationLogSettings = exports.CreateBotAliasHeaders = exports.CreateBotAliasPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateBotAliasPathParams = /** @class */ (function (_super) {
    __extends(CreateBotAliasPathParams, _super);
    function CreateBotAliasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], CreateBotAliasPathParams.prototype, "botId", void 0);
    return CreateBotAliasPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateBotAliasPathParams = CreateBotAliasPathParams;
var CreateBotAliasHeaders = /** @class */ (function (_super) {
    __extends(CreateBotAliasHeaders, _super);
    function CreateBotAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBotAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBotAliasHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateBotAliasHeaders = CreateBotAliasHeaders;
// CreateBotAliasRequestBodyConversationLogSettings
/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
var CreateBotAliasRequestBodyConversationLogSettings = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequestBodyConversationLogSettings, _super);
    function CreateBotAliasRequestBodyConversationLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting }),
        __metadata("design:type", Array)
    ], CreateBotAliasRequestBodyConversationLogSettings.prototype, "audioLogSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting }),
        __metadata("design:type", Array)
    ], CreateBotAliasRequestBodyConversationLogSettings.prototype, "textLogSettings", void 0);
    return CreateBotAliasRequestBodyConversationLogSettings;
}(utils_1.SpeakeasyBase));
exports.CreateBotAliasRequestBodyConversationLogSettings = CreateBotAliasRequestBodyConversationLogSettings;
// CreateBotAliasRequestBodySentimentAnalysisSettings
/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
var CreateBotAliasRequestBodySentimentAnalysisSettings = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequestBodySentimentAnalysisSettings, _super);
    function CreateBotAliasRequestBodySentimentAnalysisSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detectSentiment" }),
        __metadata("design:type", Boolean)
    ], CreateBotAliasRequestBodySentimentAnalysisSettings.prototype, "detectSentiment", void 0);
    return CreateBotAliasRequestBodySentimentAnalysisSettings;
}(utils_1.SpeakeasyBase));
exports.CreateBotAliasRequestBodySentimentAnalysisSettings = CreateBotAliasRequestBodySentimentAnalysisSettings;
var CreateBotAliasRequestBody = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequestBody, _super);
    function CreateBotAliasRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings }),
        __metadata("design:type", Object)
    ], CreateBotAliasRequestBody.prototype, "botAliasLocaleSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botAliasName" }),
        __metadata("design:type", String)
    ], CreateBotAliasRequestBody.prototype, "botAliasName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], CreateBotAliasRequestBody.prototype, "botVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversationLogSettings" }),
        __metadata("design:type", CreateBotAliasRequestBodyConversationLogSettings)
    ], CreateBotAliasRequestBody.prototype, "conversationLogSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateBotAliasRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sentimentAnalysisSettings" }),
        __metadata("design:type", CreateBotAliasRequestBodySentimentAnalysisSettings)
    ], CreateBotAliasRequestBody.prototype, "sentimentAnalysisSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateBotAliasRequestBody.prototype, "tags", void 0);
    return CreateBotAliasRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateBotAliasRequestBody = CreateBotAliasRequestBody;
var CreateBotAliasRequest = /** @class */ (function (_super) {
    __extends(CreateBotAliasRequest, _super);
    function CreateBotAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBotAliasPathParams)
    ], CreateBotAliasRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBotAliasHeaders)
    ], CreateBotAliasRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBotAliasRequestBody)
    ], CreateBotAliasRequest.prototype, "request", void 0);
    return CreateBotAliasRequest;
}(utils_1.SpeakeasyBase));
exports.CreateBotAliasRequest = CreateBotAliasRequest;
var CreateBotAliasResponse = /** @class */ (function (_super) {
    __extends(CreateBotAliasResponse, _super);
    function CreateBotAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateBotAliasResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateBotAliasResponse)
    ], CreateBotAliasResponse.prototype, "createBotAliasResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateBotAliasResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBotAliasResponse.prototype, "validationException", void 0);
    return CreateBotAliasResponse;
}(utils_1.SpeakeasyBase));
exports.CreateBotAliasResponse = CreateBotAliasResponse;

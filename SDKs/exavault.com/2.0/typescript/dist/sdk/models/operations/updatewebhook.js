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
exports.UpdateWebhookResponse = exports.UpdateWebhookRequest = exports.UpdateWebhookUpdateWebhookRequestBody = exports.UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum = exports.UpdateWebhookHeaders = exports.UpdateWebhookPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateWebhookPathParams = /** @class */ (function (_super) {
    __extends(UpdateWebhookPathParams, _super);
    function UpdateWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UpdateWebhookPathParams.prototype, "id", void 0);
    return UpdateWebhookPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateWebhookPathParams = UpdateWebhookPathParams;
var UpdateWebhookHeaders = /** @class */ (function (_super) {
    __extends(UpdateWebhookHeaders, _super);
    function UpdateWebhookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], UpdateWebhookHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], UpdateWebhookHeaders.prototype, "evApiKey", void 0);
    return UpdateWebhookHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateWebhookHeaders = UpdateWebhookHeaders;
var UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum;
(function (UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum) {
    UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum["V2"] = "v2";
    UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum["V1"] = "v1";
})(UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum = exports.UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum || (exports.UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum = {}));
var UpdateWebhookUpdateWebhookRequestBody = /** @class */ (function (_super) {
    __extends(UpdateWebhookUpdateWebhookRequestBody, _super);
    function UpdateWebhookUpdateWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointUrl" }),
        __metadata("design:type", String)
    ], UpdateWebhookUpdateWebhookRequestBody.prototype, "endpointUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], UpdateWebhookUpdateWebhookRequestBody.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=responseVersion" }),
        __metadata("design:type", String)
    ], UpdateWebhookUpdateWebhookRequestBody.prototype, "responseVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggers" }),
        __metadata("design:type", shared.WebhookTriggers)
    ], UpdateWebhookUpdateWebhookRequestBody.prototype, "triggers", void 0);
    return UpdateWebhookUpdateWebhookRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateWebhookUpdateWebhookRequestBody = UpdateWebhookUpdateWebhookRequestBody;
var UpdateWebhookRequest = /** @class */ (function (_super) {
    __extends(UpdateWebhookRequest, _super);
    function UpdateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateWebhookPathParams)
    ], UpdateWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateWebhookHeaders)
    ], UpdateWebhookRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateWebhookUpdateWebhookRequestBody)
    ], UpdateWebhookRequest.prototype, "request", void 0);
    return UpdateWebhookRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateWebhookRequest = UpdateWebhookRequest;
var UpdateWebhookResponse = /** @class */ (function (_super) {
    __extends(UpdateWebhookResponse, _super);
    function UpdateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.WebhookResponse)
    ], UpdateWebhookResponse.prototype, "webhookResponse", void 0);
    return UpdateWebhookResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateWebhookResponse = UpdateWebhookResponse;

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
exports.ResendInvitationsForShareResponse = exports.ResendInvitationsForShareRequest = exports.ResendInvitationsForShareResendInvitationsRequestBody = exports.ResendInvitationsForShareHeaders = exports.ResendInvitationsForSharePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ResendInvitationsForSharePathParams = /** @class */ (function (_super) {
    __extends(ResendInvitationsForSharePathParams, _super);
    function ResendInvitationsForSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=shareId" }),
        __metadata("design:type", Number)
    ], ResendInvitationsForSharePathParams.prototype, "shareId", void 0);
    return ResendInvitationsForSharePathParams;
}(utils_1.SpeakeasyBase));
exports.ResendInvitationsForSharePathParams = ResendInvitationsForSharePathParams;
var ResendInvitationsForShareHeaders = /** @class */ (function (_super) {
    __extends(ResendInvitationsForShareHeaders, _super);
    function ResendInvitationsForShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], ResendInvitationsForShareHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], ResendInvitationsForShareHeaders.prototype, "evApiKey", void 0);
    return ResendInvitationsForShareHeaders;
}(utils_1.SpeakeasyBase));
exports.ResendInvitationsForShareHeaders = ResendInvitationsForShareHeaders;
var ResendInvitationsForShareResendInvitationsRequestBody = /** @class */ (function (_super) {
    __extends(ResendInvitationsForShareResendInvitationsRequestBody, _super);
    function ResendInvitationsForShareResendInvitationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipientId" }),
        __metadata("design:type", Number)
    ], ResendInvitationsForShareResendInvitationsRequestBody.prototype, "recipientId", void 0);
    return ResendInvitationsForShareResendInvitationsRequestBody;
}(utils_1.SpeakeasyBase));
exports.ResendInvitationsForShareResendInvitationsRequestBody = ResendInvitationsForShareResendInvitationsRequestBody;
var ResendInvitationsForShareRequest = /** @class */ (function (_super) {
    __extends(ResendInvitationsForShareRequest, _super);
    function ResendInvitationsForShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ResendInvitationsForSharePathParams)
    ], ResendInvitationsForShareRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ResendInvitationsForShareHeaders)
    ], ResendInvitationsForShareRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ResendInvitationsForShareResendInvitationsRequestBody)
    ], ResendInvitationsForShareRequest.prototype, "request", void 0);
    return ResendInvitationsForShareRequest;
}(utils_1.SpeakeasyBase));
exports.ResendInvitationsForShareRequest = ResendInvitationsForShareRequest;
var ResendInvitationsForShareResponse = /** @class */ (function (_super) {
    __extends(ResendInvitationsForShareResponse, _super);
    function ResendInvitationsForShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ResendInvitationsForShareResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ShareRecipientsResponse)
    ], ResendInvitationsForShareResponse.prototype, "shareRecipientsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ResendInvitationsForShareResponse.prototype, "statusCode", void 0);
    return ResendInvitationsForShareResponse;
}(utils_1.SpeakeasyBase));
exports.ResendInvitationsForShareResponse = ResendInvitationsForShareResponse;

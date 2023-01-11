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
exports.DiscordGetDiscordGetResponse = exports.DiscordGetDiscordGetRequest = exports.DiscordGetDiscordGetHeaders = exports.DiscordGetDiscordGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DiscordGetDiscordGetQueryParams = /** @class */ (function (_super) {
    __extends(DiscordGetDiscordGetQueryParams, _super);
    function DiscordGetDiscordGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=base64_message" }),
        __metadata("design:type", String)
    ], DiscordGetDiscordGetQueryParams.prototype, "base64Message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=channel" }),
        __metadata("design:type", String)
    ], DiscordGetDiscordGetQueryParams.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=message" }),
        __metadata("design:type", String)
    ], DiscordGetDiscordGetQueryParams.prototype, "message", void 0);
    return DiscordGetDiscordGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DiscordGetDiscordGetQueryParams = DiscordGetDiscordGetQueryParams;
var DiscordGetDiscordGetHeaders = /** @class */ (function (_super) {
    __extends(DiscordGetDiscordGetHeaders, _super);
    function DiscordGetDiscordGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=authorization" }),
        __metadata("design:type", String)
    ], DiscordGetDiscordGetHeaders.prototype, "authorization", void 0);
    return DiscordGetDiscordGetHeaders;
}(utils_1.SpeakeasyBase));
exports.DiscordGetDiscordGetHeaders = DiscordGetDiscordGetHeaders;
var DiscordGetDiscordGetRequest = /** @class */ (function (_super) {
    __extends(DiscordGetDiscordGetRequest, _super);
    function DiscordGetDiscordGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DiscordGetDiscordGetQueryParams)
    ], DiscordGetDiscordGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DiscordGetDiscordGetHeaders)
    ], DiscordGetDiscordGetRequest.prototype, "headers", void 0);
    return DiscordGetDiscordGetRequest;
}(utils_1.SpeakeasyBase));
exports.DiscordGetDiscordGetRequest = DiscordGetDiscordGetRequest;
var DiscordGetDiscordGetResponse = /** @class */ (function (_super) {
    __extends(DiscordGetDiscordGetResponse, _super);
    function DiscordGetDiscordGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DiscordGetDiscordGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HttpValidationError)
    ], DiscordGetDiscordGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DiscordGetDiscordGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DiscordGetDiscordGetResponse.prototype, "discordGetDiscordGet200ApplicationJSONAny", void 0);
    return DiscordGetDiscordGetResponse;
}(utils_1.SpeakeasyBase));
exports.DiscordGetDiscordGetResponse = DiscordGetDiscordGetResponse;

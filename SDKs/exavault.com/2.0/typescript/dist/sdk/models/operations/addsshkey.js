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
exports.AddSshKeyResponse = exports.AddSshKeyRequest = exports.AddSshKeyAddSshKeyRequestBody = exports.AddSshKeyHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddSshKeyHeaders = /** @class */ (function (_super) {
    __extends(AddSshKeyHeaders, _super);
    function AddSshKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], AddSshKeyHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], AddSshKeyHeaders.prototype, "evApiKey", void 0);
    return AddSshKeyHeaders;
}(utils_1.SpeakeasyBase));
exports.AddSshKeyHeaders = AddSshKeyHeaders;
var AddSshKeyAddSshKeyRequestBody = /** @class */ (function (_super) {
    __extends(AddSshKeyAddSshKeyRequestBody, _super);
    function AddSshKeyAddSshKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publicKey" }),
        __metadata("design:type", String)
    ], AddSshKeyAddSshKeyRequestBody.prototype, "publicKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], AddSshKeyAddSshKeyRequestBody.prototype, "userId", void 0);
    return AddSshKeyAddSshKeyRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddSshKeyAddSshKeyRequestBody = AddSshKeyAddSshKeyRequestBody;
var AddSshKeyRequest = /** @class */ (function (_super) {
    __extends(AddSshKeyRequest, _super);
    function AddSshKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddSshKeyHeaders)
    ], AddSshKeyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddSshKeyAddSshKeyRequestBody)
    ], AddSshKeyRequest.prototype, "request", void 0);
    return AddSshKeyRequest;
}(utils_1.SpeakeasyBase));
exports.AddSshKeyRequest = AddSshKeyRequest;
var AddSshKeyResponse = /** @class */ (function (_super) {
    __extends(AddSshKeyResponse, _super);
    function AddSshKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddSshKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SshKeyResponse)
    ], AddSshKeyResponse.prototype, "sshKeyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddSshKeyResponse.prototype, "statusCode", void 0);
    return AddSshKeyResponse;
}(utils_1.SpeakeasyBase));
exports.AddSshKeyResponse = AddSshKeyResponse;

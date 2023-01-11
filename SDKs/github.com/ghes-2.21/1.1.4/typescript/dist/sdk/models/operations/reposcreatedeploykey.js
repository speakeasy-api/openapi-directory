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
exports.ReposCreateDeployKeyResponse = exports.ReposCreateDeployKeyRequest = exports.ReposCreateDeployKeyRequestBody = exports.ReposCreateDeployKeyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposCreateDeployKeyPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyPathParams, _super);
    function ReposCreateDeployKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyPathParams.prototype, "repo", void 0);
    return ReposCreateDeployKeyPathParams;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeployKeyPathParams = ReposCreateDeployKeyPathParams;
var ReposCreateDeployKeyRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyRequestBody, _super);
    function ReposCreateDeployKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyRequestBody.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=read_only" }),
        __metadata("design:type", Boolean)
    ], ReposCreateDeployKeyRequestBody.prototype, "readOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyRequestBody.prototype, "title", void 0);
    return ReposCreateDeployKeyRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeployKeyRequestBody = ReposCreateDeployKeyRequestBody;
var ReposCreateDeployKeyRequest = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyRequest, _super);
    function ReposCreateDeployKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposCreateDeployKeyPathParams)
    ], ReposCreateDeployKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateDeployKeyRequestBody)
    ], ReposCreateDeployKeyRequest.prototype, "request", void 0);
    return ReposCreateDeployKeyRequest;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeployKeyRequest = ReposCreateDeployKeyRequest;
var ReposCreateDeployKeyResponse = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyResponse, _super);
    function ReposCreateDeployKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReposCreateDeployKeyResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposCreateDeployKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeployKey)
    ], ReposCreateDeployKeyResponse.prototype, "deployKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateDeployKeyResponse.prototype, "validationError", void 0);
    return ReposCreateDeployKeyResponse;
}(utils_1.SpeakeasyBase));
exports.ReposCreateDeployKeyResponse = ReposCreateDeployKeyResponse;

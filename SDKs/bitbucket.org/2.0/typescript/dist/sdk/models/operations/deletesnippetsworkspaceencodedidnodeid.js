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
exports.DeleteSnippetsWorkspaceEncodedIdNodeIdResponse = exports.DeleteSnippetsWorkspaceEncodedIdNodeIdRequest = exports.DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity = exports.DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams, _super);
    function DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=encoded_id" }),
        __metadata("design:type", String)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams.prototype, "encodedId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams.prototype, "workspace", void 0);
    return DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams = DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams;
var DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity, _super);
    function DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity.prototype, "apiKey", void 0);
    return DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity = DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity;
var DeleteSnippetsWorkspaceEncodedIdNodeIdRequest = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdNodeIdRequest, _super);
    function DeleteSnippetsWorkspaceEncodedIdNodeIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdRequest.prototype, "security", void 0);
    return DeleteSnippetsWorkspaceEncodedIdNodeIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteSnippetsWorkspaceEncodedIdNodeIdRequest = DeleteSnippetsWorkspaceEncodedIdNodeIdRequest;
var DeleteSnippetsWorkspaceEncodedIdNodeIdResponse = /** @class */ (function (_super) {
    __extends(DeleteSnippetsWorkspaceEncodedIdNodeIdResponse, _super);
    function DeleteSnippetsWorkspaceEncodedIdNodeIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteSnippetsWorkspaceEncodedIdNodeIdResponse.prototype, "error", void 0);
    return DeleteSnippetsWorkspaceEncodedIdNodeIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteSnippetsWorkspaceEncodedIdNodeIdResponse = DeleteSnippetsWorkspaceEncodedIdNodeIdResponse;

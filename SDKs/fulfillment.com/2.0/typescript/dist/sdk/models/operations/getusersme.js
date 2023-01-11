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
exports.GetUsersMeResponse = exports.GetUsersMeRequest = exports.GetUsersMeUserContactV2 = exports.GetUsersMeUserContactV2Merchant = exports.GetUsersMeUserContactV2UserContactV2 = exports.GetUsersMeUserContactV2UserContactV2Merchant = exports.GetUsersMeSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUsersMeSecurity = /** @class */ (function (_super) {
    __extends(GetUsersMeSecurity, _super);
    function GetUsersMeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], GetUsersMeSecurity.prototype, "fdcAuth", void 0);
    return GetUsersMeSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUsersMeSecurity = GetUsersMeSecurity;
var GetUsersMeUserContactV2UserContactV2Merchant = /** @class */ (function (_super) {
    __extends(GetUsersMeUserContactV2UserContactV2Merchant, _super);
    function GetUsersMeUserContactV2UserContactV2Merchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUsersMeUserContactV2UserContactV2Merchant.prototype, "id", void 0);
    return GetUsersMeUserContactV2UserContactV2Merchant;
}(utils_1.SpeakeasyBase));
exports.GetUsersMeUserContactV2UserContactV2Merchant = GetUsersMeUserContactV2UserContactV2Merchant;
var GetUsersMeUserContactV2UserContactV2 = /** @class */ (function (_super) {
    __extends(GetUsersMeUserContactV2UserContactV2, _super);
    function GetUsersMeUserContactV2UserContactV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contactInfo" }),
        __metadata("design:type", shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "contactInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deptLeader" }),
        __metadata("design:type", Boolean)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "deptLeader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant" }),
        __metadata("design:type", GetUsersMeUserContactV2UserContactV2Merchant)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "merchant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Boolean)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", Date)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetUsersMeUserContactV2UserContactV2.prototype, "username", void 0);
    return GetUsersMeUserContactV2UserContactV2;
}(utils_1.SpeakeasyBase));
exports.GetUsersMeUserContactV2UserContactV2 = GetUsersMeUserContactV2UserContactV2;
var GetUsersMeUserContactV2Merchant = /** @class */ (function (_super) {
    __extends(GetUsersMeUserContactV2Merchant, _super);
    function GetUsersMeUserContactV2Merchant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUsersMeUserContactV2Merchant.prototype, "id", void 0);
    return GetUsersMeUserContactV2Merchant;
}(utils_1.SpeakeasyBase));
exports.GetUsersMeUserContactV2Merchant = GetUsersMeUserContactV2Merchant;
var GetUsersMeUserContactV2 = /** @class */ (function (_super) {
    __extends(GetUsersMeUserContactV2, _super);
    function GetUsersMeUserContactV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], GetUsersMeUserContactV2.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contactInfo" }),
        __metadata("design:type", GetUsersMeUserContactV2UserContactV2)
    ], GetUsersMeUserContactV2.prototype, "contactInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", Date)
    ], GetUsersMeUserContactV2.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deptLeader" }),
        __metadata("design:type", Boolean)
    ], GetUsersMeUserContactV2.prototype, "deptLeader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUsersMeUserContactV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant" }),
        __metadata("design:type", GetUsersMeUserContactV2Merchant)
    ], GetUsersMeUserContactV2.prototype, "merchant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUsersMeUserContactV2.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Boolean)
    ], GetUsersMeUserContactV2.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], GetUsersMeUserContactV2.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", Date)
    ], GetUsersMeUserContactV2.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetUsersMeUserContactV2.prototype, "username", void 0);
    return GetUsersMeUserContactV2;
}(utils_1.SpeakeasyBase));
exports.GetUsersMeUserContactV2 = GetUsersMeUserContactV2;
var GetUsersMeRequest = /** @class */ (function (_super) {
    __extends(GetUsersMeRequest, _super);
    function GetUsersMeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersMeSecurity)
    ], GetUsersMeRequest.prototype, "security", void 0);
    return GetUsersMeRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersMeRequest = GetUsersMeRequest;
var GetUsersMeResponse = /** @class */ (function (_super) {
    __extends(GetUsersMeResponse, _super);
    function GetUsersMeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersMeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersMeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersMeUserContactV2)
    ], GetUsersMeResponse.prototype, "userContactV2", void 0);
    return GetUsersMeResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersMeResponse = GetUsersMeResponse;

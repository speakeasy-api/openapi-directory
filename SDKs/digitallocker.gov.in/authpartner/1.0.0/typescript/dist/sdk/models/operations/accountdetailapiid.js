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
exports.AccountDetailApiIdResponse = exports.AccountDetailApiIdRequest = exports.AccountDetailApiId500ApplicationJson = exports.AccountDetailApiId401ApplicationJson = exports.AccountDetailApiIdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AccountDetailApiIdSecurity = /** @class */ (function (_super) {
    __extends(AccountDetailApiIdSecurity, _super);
    function AccountDetailApiIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], AccountDetailApiIdSecurity.prototype, "bearerAuth", void 0);
    return AccountDetailApiIdSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountDetailApiIdSecurity = AccountDetailApiIdSecurity;
var AccountDetailApiId401ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountDetailApiId401ApplicationJson, _super);
    function AccountDetailApiId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], AccountDetailApiId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], AccountDetailApiId401ApplicationJson.prototype, "errorDescription", void 0);
    return AccountDetailApiId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountDetailApiId401ApplicationJson = AccountDetailApiId401ApplicationJson;
var AccountDetailApiId500ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountDetailApiId500ApplicationJson, _super);
    function AccountDetailApiId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], AccountDetailApiId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], AccountDetailApiId500ApplicationJson.prototype, "errorDescription", void 0);
    return AccountDetailApiId500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountDetailApiId500ApplicationJson = AccountDetailApiId500ApplicationJson;
var AccountDetailApiIdRequest = /** @class */ (function (_super) {
    __extends(AccountDetailApiIdRequest, _super);
    function AccountDetailApiIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountDetailApiIdSecurity)
    ], AccountDetailApiIdRequest.prototype, "security", void 0);
    return AccountDetailApiIdRequest;
}(utils_1.SpeakeasyBase));
exports.AccountDetailApiIdRequest = AccountDetailApiIdRequest;
var AccountDetailApiIdResponse = /** @class */ (function (_super) {
    __extends(AccountDetailApiIdResponse, _super);
    function AccountDetailApiIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountDetailApiId401ApplicationJson)
    ], AccountDetailApiIdResponse.prototype, "accountDetailAPIId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountDetailApiId500ApplicationJson)
    ], AccountDetailApiIdResponse.prototype, "accountDetailAPIId500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountDetailApiIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AccountDetailApiIdResponse.prototype, "sample", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountDetailApiIdResponse.prototype, "statusCode", void 0);
    return AccountDetailApiIdResponse;
}(utils_1.SpeakeasyBase));
exports.AccountDetailApiIdResponse = AccountDetailApiIdResponse;

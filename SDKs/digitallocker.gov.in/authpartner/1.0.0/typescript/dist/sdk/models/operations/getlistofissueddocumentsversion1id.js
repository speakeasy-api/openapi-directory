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
exports.GetListOfIssuedDocumentsVersion1IdResponse = exports.GetListOfIssuedDocumentsVersion1IdRequest = exports.GetListOfIssuedDocumentsVersion1Id401ApplicationJson = exports.GetListOfIssuedDocumentsVersion1IdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListOfIssuedDocumentsVersion1IdSecurity = /** @class */ (function (_super) {
    __extends(GetListOfIssuedDocumentsVersion1IdSecurity, _super);
    function GetListOfIssuedDocumentsVersion1IdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetListOfIssuedDocumentsVersion1IdSecurity.prototype, "bearerAuth", void 0);
    return GetListOfIssuedDocumentsVersion1IdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuedDocumentsVersion1IdSecurity = GetListOfIssuedDocumentsVersion1IdSecurity;
var GetListOfIssuedDocumentsVersion1Id401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfIssuedDocumentsVersion1Id401ApplicationJson, _super);
    function GetListOfIssuedDocumentsVersion1Id401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfIssuedDocumentsVersion1Id401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfIssuedDocumentsVersion1Id401ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfIssuedDocumentsVersion1Id401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuedDocumentsVersion1Id401ApplicationJson = GetListOfIssuedDocumentsVersion1Id401ApplicationJson;
var GetListOfIssuedDocumentsVersion1IdRequest = /** @class */ (function (_super) {
    __extends(GetListOfIssuedDocumentsVersion1IdRequest, _super);
    function GetListOfIssuedDocumentsVersion1IdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfIssuedDocumentsVersion1IdSecurity)
    ], GetListOfIssuedDocumentsVersion1IdRequest.prototype, "security", void 0);
    return GetListOfIssuedDocumentsVersion1IdRequest;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuedDocumentsVersion1IdRequest = GetListOfIssuedDocumentsVersion1IdRequest;
var GetListOfIssuedDocumentsVersion1IdResponse = /** @class */ (function (_super) {
    __extends(GetListOfIssuedDocumentsVersion1IdResponse, _super);
    function GetListOfIssuedDocumentsVersion1IdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListOfIssuedDocumentsVersion1IdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfIssuedDocumentsVersion1Id401ApplicationJson)
    ], GetListOfIssuedDocumentsVersion1IdResponse.prototype, "getListOfIssuedDocumentsVersion1Id401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetListOfIssuedDocumentsVersion1IdResponse.prototype, "getListOfIssuedDocumentsVersion1Id500ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetListOfIssuedDocumentsVersion1IdResponse.prototype, "sample", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListOfIssuedDocumentsVersion1IdResponse.prototype, "statusCode", void 0);
    return GetListOfIssuedDocumentsVersion1IdResponse;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuedDocumentsVersion1IdResponse = GetListOfIssuedDocumentsVersion1IdResponse;

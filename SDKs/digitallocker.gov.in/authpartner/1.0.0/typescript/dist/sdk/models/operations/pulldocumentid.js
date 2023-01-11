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
exports.PullDocumentIdResponse = exports.PullDocumentIdRequest = exports.PullDocumentId404ApplicationJson = exports.PullDocumentId401ApplicationJson = exports.PullDocumentIdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PullDocumentIdSecurity = /** @class */ (function (_super) {
    __extends(PullDocumentIdSecurity, _super);
    function PullDocumentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PullDocumentIdSecurity.prototype, "bearerAuth", void 0);
    return PullDocumentIdSecurity;
}(utils_1.SpeakeasyBase));
exports.PullDocumentIdSecurity = PullDocumentIdSecurity;
var PullDocumentId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PullDocumentId401ApplicationJson, _super);
    function PullDocumentId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PullDocumentId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], PullDocumentId401ApplicationJson.prototype, "errorDescription", void 0);
    return PullDocumentId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PullDocumentId401ApplicationJson = PullDocumentId401ApplicationJson;
var PullDocumentId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PullDocumentId404ApplicationJson, _super);
    function PullDocumentId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], PullDocumentId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], PullDocumentId404ApplicationJson.prototype, "errorDescription", void 0);
    return PullDocumentId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PullDocumentId404ApplicationJson = PullDocumentId404ApplicationJson;
var PullDocumentIdRequest = /** @class */ (function (_super) {
    __extends(PullDocumentIdRequest, _super);
    function PullDocumentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], PullDocumentIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullDocumentIdSecurity)
    ], PullDocumentIdRequest.prototype, "security", void 0);
    return PullDocumentIdRequest;
}(utils_1.SpeakeasyBase));
exports.PullDocumentIdRequest = PullDocumentIdRequest;
var PullDocumentIdResponse = /** @class */ (function (_super) {
    __extends(PullDocumentIdResponse, _super);
    function PullDocumentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PullDocumentIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PullDocumentIdResponse.prototype, "pullDocumentId400ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullDocumentId401ApplicationJson)
    ], PullDocumentIdResponse.prototype, "pullDocumentId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullDocumentId404ApplicationJson)
    ], PullDocumentIdResponse.prototype, "pullDocumentId404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PullDocumentIdResponse.prototype, "pullDocumentId500ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PullDocumentIdResponse.prototype, "sample", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PullDocumentIdResponse.prototype, "statusCode", void 0);
    return PullDocumentIdResponse;
}(utils_1.SpeakeasyBase));
exports.PullDocumentIdResponse = PullDocumentIdResponse;

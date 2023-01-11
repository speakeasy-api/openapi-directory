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
exports.GetApiV1DonationsIndexResponse = exports.GetApiV1DonationsIndexRequest = exports.GetApiV1DonationsIndexSecurity = exports.GetApiV1DonationsIndexQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetApiV1DonationsIndexQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsIndexQueryParams, _super);
    function GetApiV1DonationsIndexQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsIndexQueryParams.prototype, "page", void 0);
    return GetApiV1DonationsIndexQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsIndexQueryParams = GetApiV1DonationsIndexQueryParams;
var GetApiV1DonationsIndexSecurity = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsIndexSecurity, _super);
    function GetApiV1DonationsIndexSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetApiV1DonationsIndexSecurity.prototype, "basicAuth", void 0);
    return GetApiV1DonationsIndexSecurity;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsIndexSecurity = GetApiV1DonationsIndexSecurity;
var GetApiV1DonationsIndexRequest = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsIndexRequest, _super);
    function GetApiV1DonationsIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV1DonationsIndexQueryParams)
    ], GetApiV1DonationsIndexRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV1DonationsIndexSecurity)
    ], GetApiV1DonationsIndexRequest.prototype, "security", void 0);
    return GetApiV1DonationsIndexRequest;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsIndexRequest = GetApiV1DonationsIndexRequest;
var GetApiV1DonationsIndexResponse = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsIndexResponse, _super);
    function GetApiV1DonationsIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetApiV1DonationsIndexResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetApiV1DonationsIndexResponse.prototype, "statusCode", void 0);
    return GetApiV1DonationsIndexResponse;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsIndexResponse = GetApiV1DonationsIndexResponse;

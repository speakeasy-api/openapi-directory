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
exports.AllergiesReadResponse = exports.AllergiesReadRequest = exports.AllergiesReadSecurity = exports.AllergiesReadQueryParams = exports.AllergiesReadPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AllergiesReadPathParams = /** @class */ (function (_super) {
    __extends(AllergiesReadPathParams, _super);
    function AllergiesReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AllergiesReadPathParams.prototype, "id", void 0);
    return AllergiesReadPathParams;
}(utils_1.SpeakeasyBase));
exports.AllergiesReadPathParams = AllergiesReadPathParams;
var AllergiesReadQueryParams = /** @class */ (function (_super) {
    __extends(AllergiesReadQueryParams, _super);
    function AllergiesReadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], AllergiesReadQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], AllergiesReadQueryParams.prototype, "patient", void 0);
    return AllergiesReadQueryParams;
}(utils_1.SpeakeasyBase));
exports.AllergiesReadQueryParams = AllergiesReadQueryParams;
var AllergiesReadSecurity = /** @class */ (function (_super) {
    __extends(AllergiesReadSecurity, _super);
    function AllergiesReadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], AllergiesReadSecurity.prototype, "drchronoOauth2", void 0);
    return AllergiesReadSecurity;
}(utils_1.SpeakeasyBase));
exports.AllergiesReadSecurity = AllergiesReadSecurity;
var AllergiesReadRequest = /** @class */ (function (_super) {
    __extends(AllergiesReadRequest, _super);
    function AllergiesReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AllergiesReadPathParams)
    ], AllergiesReadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AllergiesReadQueryParams)
    ], AllergiesReadRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AllergiesReadSecurity)
    ], AllergiesReadRequest.prototype, "security", void 0);
    return AllergiesReadRequest;
}(utils_1.SpeakeasyBase));
exports.AllergiesReadRequest = AllergiesReadRequest;
var AllergiesReadResponse = /** @class */ (function (_super) {
    __extends(AllergiesReadResponse, _super);
    function AllergiesReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AllergiesReadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PatientAllergy)
    ], AllergiesReadResponse.prototype, "patientAllergy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AllergiesReadResponse.prototype, "statusCode", void 0);
    return AllergiesReadResponse;
}(utils_1.SpeakeasyBase));
exports.AllergiesReadResponse = AllergiesReadResponse;

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
exports.AllergiesPartialUpdateResponse = exports.AllergiesPartialUpdateRequest = exports.AllergiesPartialUpdateSecurity = exports.AllergiesPartialUpdateQueryParams = exports.AllergiesPartialUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AllergiesPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(AllergiesPartialUpdatePathParams, _super);
    function AllergiesPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AllergiesPartialUpdatePathParams.prototype, "id", void 0);
    return AllergiesPartialUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AllergiesPartialUpdatePathParams = AllergiesPartialUpdatePathParams;
var AllergiesPartialUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AllergiesPartialUpdateQueryParams, _super);
    function AllergiesPartialUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], AllergiesPartialUpdateQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], AllergiesPartialUpdateQueryParams.prototype, "patient", void 0);
    return AllergiesPartialUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AllergiesPartialUpdateQueryParams = AllergiesPartialUpdateQueryParams;
var AllergiesPartialUpdateSecurity = /** @class */ (function (_super) {
    __extends(AllergiesPartialUpdateSecurity, _super);
    function AllergiesPartialUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], AllergiesPartialUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return AllergiesPartialUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.AllergiesPartialUpdateSecurity = AllergiesPartialUpdateSecurity;
var AllergiesPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(AllergiesPartialUpdateRequest, _super);
    function AllergiesPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AllergiesPartialUpdatePathParams)
    ], AllergiesPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AllergiesPartialUpdateQueryParams)
    ], AllergiesPartialUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AllergiesPartialUpdateSecurity)
    ], AllergiesPartialUpdateRequest.prototype, "security", void 0);
    return AllergiesPartialUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AllergiesPartialUpdateRequest = AllergiesPartialUpdateRequest;
var AllergiesPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(AllergiesPartialUpdateResponse, _super);
    function AllergiesPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AllergiesPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AllergiesPartialUpdateResponse.prototype, "statusCode", void 0);
    return AllergiesPartialUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AllergiesPartialUpdateResponse = AllergiesPartialUpdateResponse;

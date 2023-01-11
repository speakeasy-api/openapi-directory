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
exports.InventoryVaccinesListResponse = exports.InventoryVaccinesListRequest = exports.InventoryVaccinesList200ApplicationJson = exports.InventoryVaccinesListSecurity = exports.InventoryVaccinesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var InventoryVaccinesListQueryParams = /** @class */ (function (_super) {
    __extends(InventoryVaccinesListQueryParams, _super);
    function InventoryVaccinesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], InventoryVaccinesListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cvx_code" }),
        __metadata("design:type", String)
    ], InventoryVaccinesListQueryParams.prototype, "cvxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], InventoryVaccinesListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], InventoryVaccinesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], InventoryVaccinesListQueryParams.prototype, "since", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], InventoryVaccinesListQueryParams.prototype, "status", void 0);
    return InventoryVaccinesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.InventoryVaccinesListQueryParams = InventoryVaccinesListQueryParams;
var InventoryVaccinesListSecurity = /** @class */ (function (_super) {
    __extends(InventoryVaccinesListSecurity, _super);
    function InventoryVaccinesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], InventoryVaccinesListSecurity.prototype, "drchronoOauth2", void 0);
    return InventoryVaccinesListSecurity;
}(utils_1.SpeakeasyBase));
exports.InventoryVaccinesListSecurity = InventoryVaccinesListSecurity;
// InventoryVaccinesList200ApplicationJson
/**
 * Paginated Result
**/
var InventoryVaccinesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(InventoryVaccinesList200ApplicationJson, _super);
    function InventoryVaccinesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.InventoryVaccine }),
        __metadata("design:type", Array)
    ], InventoryVaccinesList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], InventoryVaccinesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], InventoryVaccinesList200ApplicationJson.prototype, "previous", void 0);
    return InventoryVaccinesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.InventoryVaccinesList200ApplicationJson = InventoryVaccinesList200ApplicationJson;
var InventoryVaccinesListRequest = /** @class */ (function (_super) {
    __extends(InventoryVaccinesListRequest, _super);
    function InventoryVaccinesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InventoryVaccinesListQueryParams)
    ], InventoryVaccinesListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InventoryVaccinesListSecurity)
    ], InventoryVaccinesListRequest.prototype, "security", void 0);
    return InventoryVaccinesListRequest;
}(utils_1.SpeakeasyBase));
exports.InventoryVaccinesListRequest = InventoryVaccinesListRequest;
var InventoryVaccinesListResponse = /** @class */ (function (_super) {
    __extends(InventoryVaccinesListResponse, _super);
    function InventoryVaccinesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], InventoryVaccinesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], InventoryVaccinesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InventoryVaccinesList200ApplicationJson)
    ], InventoryVaccinesListResponse.prototype, "inventoryVaccinesList200ApplicationJSONObject", void 0);
    return InventoryVaccinesListResponse;
}(utils_1.SpeakeasyBase));
exports.InventoryVaccinesListResponse = InventoryVaccinesListResponse;

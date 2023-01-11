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
exports.GetInvoiceByUuidResponse = exports.GetInvoiceByUuidRequest = exports.GetInvoiceByUuid401ApplicationJson = exports.GetInvoiceByUuid200ApplicationJson = exports.GetInvoiceByUuid200ApplicationJsonMeta = exports.GetInvoiceByUuid200ApplicationJsonLinks = exports.GetInvoiceByUuid200ApplicationJsonLinksPages2 = exports.GetInvoiceByUuid200ApplicationJsonLinksPages1 = exports.GetInvoiceByUuid200ApplicationJsonInvoiceItems = exports.GetInvoiceByUuidPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetInvoiceByUuidPathParams = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuidPathParams, _super);
    function GetInvoiceByUuidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuidPathParams.prototype, "invoiceUuid", void 0);
    return GetInvoiceByUuidPathParams;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuidPathParams = GetInvoiceByUuidPathParams;
var GetInvoiceByUuid200ApplicationJsonInvoiceItems = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuid200ApplicationJsonInvoiceItems, _super);
    function GetInvoiceByUuid200ApplicationJsonInvoiceItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration_unit" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "durationUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_time" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_description" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "groupDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project_name" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_uuid" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "resourceUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonInvoiceItems.prototype, "startTime", void 0);
    return GetInvoiceByUuid200ApplicationJsonInvoiceItems;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuid200ApplicationJsonInvoiceItems = GetInvoiceByUuid200ApplicationJsonInvoiceItems;
var GetInvoiceByUuid200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuid200ApplicationJsonLinksPages1, _super);
    function GetInvoiceByUuid200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return GetInvoiceByUuid200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuid200ApplicationJsonLinksPages1 = GetInvoiceByUuid200ApplicationJsonLinksPages1;
var GetInvoiceByUuid200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuid200ApplicationJsonLinksPages2, _super);
    function GetInvoiceByUuid200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return GetInvoiceByUuid200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuid200ApplicationJsonLinksPages2 = GetInvoiceByUuid200ApplicationJsonLinksPages2;
var GetInvoiceByUuid200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuid200ApplicationJsonLinks, _super);
    function GetInvoiceByUuid200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], GetInvoiceByUuid200ApplicationJsonLinks.prototype, "pages", void 0);
    return GetInvoiceByUuid200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuid200ApplicationJsonLinks = GetInvoiceByUuid200ApplicationJsonLinks;
// GetInvoiceByUuid200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var GetInvoiceByUuid200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuid200ApplicationJsonMeta, _super);
    function GetInvoiceByUuid200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetInvoiceByUuid200ApplicationJsonMeta.prototype, "total", void 0);
    return GetInvoiceByUuid200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuid200ApplicationJsonMeta = GetInvoiceByUuid200ApplicationJsonMeta;
var GetInvoiceByUuid200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuid200ApplicationJson, _super);
    function GetInvoiceByUuid200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_items", elemType: GetInvoiceByUuid200ApplicationJsonInvoiceItems }),
        __metadata("design:type", Array)
    ], GetInvoiceByUuid200ApplicationJson.prototype, "invoiceItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", GetInvoiceByUuid200ApplicationJsonLinks)
    ], GetInvoiceByUuid200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetInvoiceByUuid200ApplicationJsonMeta)
    ], GetInvoiceByUuid200ApplicationJson.prototype, "meta", void 0);
    return GetInvoiceByUuid200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuid200ApplicationJson = GetInvoiceByUuid200ApplicationJson;
var GetInvoiceByUuid401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuid401ApplicationJson, _super);
    function GetInvoiceByUuid401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetInvoiceByUuid401ApplicationJson.prototype, "requestId", void 0);
    return GetInvoiceByUuid401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuid401ApplicationJson = GetInvoiceByUuid401ApplicationJson;
var GetInvoiceByUuidRequest = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuidRequest, _super);
    function GetInvoiceByUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceByUuidPathParams)
    ], GetInvoiceByUuidRequest.prototype, "pathParams", void 0);
    return GetInvoiceByUuidRequest;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuidRequest = GetInvoiceByUuidRequest;
var GetInvoiceByUuidResponse = /** @class */ (function (_super) {
    __extends(GetInvoiceByUuidResponse, _super);
    function GetInvoiceByUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetInvoiceByUuidResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvoiceByUuidResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetInvoiceByUuidResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceByUuid200ApplicationJson)
    ], GetInvoiceByUuidResponse.prototype, "getInvoiceByUuid200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceByUuid401ApplicationJson)
    ], GetInvoiceByUuidResponse.prototype, "getInvoiceByUuid401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetInvoiceByUuidResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetInvoiceByUuidResponse;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceByUuidResponse = GetInvoiceByUuidResponse;

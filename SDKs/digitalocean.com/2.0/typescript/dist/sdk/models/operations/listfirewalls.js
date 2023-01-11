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
exports.ListFirewallsResponse = exports.ListFirewallsRequest = exports.ListFirewalls401ApplicationJson = exports.ListFirewalls200ApplicationJson = exports.ListFirewalls200ApplicationJsonMeta = exports.ListFirewalls200ApplicationJsonLinks = exports.ListFirewalls200ApplicationJsonLinksPages2 = exports.ListFirewalls200ApplicationJsonLinksPages1 = exports.ListFirewallsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListFirewallsQueryParams = /** @class */ (function (_super) {
    __extends(ListFirewallsQueryParams, _super);
    function ListFirewallsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListFirewallsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListFirewallsQueryParams.prototype, "perPage", void 0);
    return ListFirewallsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListFirewallsQueryParams = ListFirewallsQueryParams;
var ListFirewalls200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListFirewalls200ApplicationJsonLinksPages1, _super);
    function ListFirewalls200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListFirewalls200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListFirewalls200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListFirewalls200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListFirewalls200ApplicationJsonLinksPages1 = ListFirewalls200ApplicationJsonLinksPages1;
var ListFirewalls200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListFirewalls200ApplicationJsonLinksPages2, _super);
    function ListFirewalls200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListFirewalls200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListFirewalls200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListFirewalls200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListFirewalls200ApplicationJsonLinksPages2 = ListFirewalls200ApplicationJsonLinksPages2;
var ListFirewalls200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListFirewalls200ApplicationJsonLinks, _super);
    function ListFirewalls200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListFirewalls200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListFirewalls200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListFirewalls200ApplicationJsonLinks = ListFirewalls200ApplicationJsonLinks;
// ListFirewalls200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListFirewalls200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListFirewalls200ApplicationJsonMeta, _super);
    function ListFirewalls200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListFirewalls200ApplicationJsonMeta.prototype, "total", void 0);
    return ListFirewalls200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListFirewalls200ApplicationJsonMeta = ListFirewalls200ApplicationJsonMeta;
var ListFirewalls200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListFirewalls200ApplicationJson, _super);
    function ListFirewalls200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewalls", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems }),
        __metadata("design:type", Array)
    ], ListFirewalls200ApplicationJson.prototype, "firewalls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListFirewalls200ApplicationJsonLinks)
    ], ListFirewalls200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListFirewalls200ApplicationJsonMeta)
    ], ListFirewalls200ApplicationJson.prototype, "meta", void 0);
    return ListFirewalls200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListFirewalls200ApplicationJson = ListFirewalls200ApplicationJson;
var ListFirewalls401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListFirewalls401ApplicationJson, _super);
    function ListFirewalls401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListFirewalls401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListFirewalls401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListFirewalls401ApplicationJson.prototype, "requestId", void 0);
    return ListFirewalls401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListFirewalls401ApplicationJson = ListFirewalls401ApplicationJson;
var ListFirewallsRequest = /** @class */ (function (_super) {
    __extends(ListFirewallsRequest, _super);
    function ListFirewallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFirewallsQueryParams)
    ], ListFirewallsRequest.prototype, "queryParams", void 0);
    return ListFirewallsRequest;
}(utils_1.SpeakeasyBase));
exports.ListFirewallsRequest = ListFirewallsRequest;
var ListFirewallsResponse = /** @class */ (function (_super) {
    __extends(ListFirewallsResponse, _super);
    function ListFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListFirewallsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListFirewallsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListFirewallsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFirewalls200ApplicationJson)
    ], ListFirewallsResponse.prototype, "listFirewalls200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListFirewalls401ApplicationJson)
    ], ListFirewallsResponse.prototype, "listFirewalls401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListFirewallsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListFirewallsResponse;
}(utils_1.SpeakeasyBase));
exports.ListFirewallsResponse = ListFirewallsResponse;

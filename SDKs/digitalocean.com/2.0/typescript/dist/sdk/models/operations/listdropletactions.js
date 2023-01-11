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
exports.ListDropletActionsResponse = exports.ListDropletActionsRequest = exports.ListDropletActions401ApplicationJson = exports.ListDropletActions200ApplicationJson = exports.ListDropletActions200ApplicationJsonMeta = exports.ListDropletActions200ApplicationJsonLinks = exports.ListDropletActions200ApplicationJsonLinksPages2 = exports.ListDropletActions200ApplicationJsonLinksPages1 = exports.ListDropletActionsQueryParams = exports.ListDropletActionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListDropletActionsPathParams = /** @class */ (function (_super) {
    __extends(ListDropletActionsPathParams, _super);
    function ListDropletActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=droplet_id" }),
        __metadata("design:type", Number)
    ], ListDropletActionsPathParams.prototype, "dropletId", void 0);
    return ListDropletActionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletActionsPathParams = ListDropletActionsPathParams;
var ListDropletActionsQueryParams = /** @class */ (function (_super) {
    __extends(ListDropletActionsQueryParams, _super);
    function ListDropletActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListDropletActionsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListDropletActionsQueryParams.prototype, "perPage", void 0);
    return ListDropletActionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDropletActionsQueryParams = ListDropletActionsQueryParams;
var ListDropletActions200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListDropletActions200ApplicationJsonLinksPages1, _super);
    function ListDropletActions200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListDropletActions200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListDropletActions200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListDropletActions200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListDropletActions200ApplicationJsonLinksPages1 = ListDropletActions200ApplicationJsonLinksPages1;
var ListDropletActions200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListDropletActions200ApplicationJsonLinksPages2, _super);
    function ListDropletActions200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListDropletActions200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListDropletActions200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListDropletActions200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListDropletActions200ApplicationJsonLinksPages2 = ListDropletActions200ApplicationJsonLinksPages2;
var ListDropletActions200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListDropletActions200ApplicationJsonLinks, _super);
    function ListDropletActions200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListDropletActions200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListDropletActions200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListDropletActions200ApplicationJsonLinks = ListDropletActions200ApplicationJsonLinks;
// ListDropletActions200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListDropletActions200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListDropletActions200ApplicationJsonMeta, _super);
    function ListDropletActions200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListDropletActions200ApplicationJsonMeta.prototype, "total", void 0);
    return ListDropletActions200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListDropletActions200ApplicationJsonMeta = ListDropletActions200ApplicationJsonMeta;
var ListDropletActions200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletActions200ApplicationJson, _super);
    function ListDropletActions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems }),
        __metadata("design:type", Array)
    ], ListDropletActions200ApplicationJson.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListDropletActions200ApplicationJsonLinks)
    ], ListDropletActions200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListDropletActions200ApplicationJsonMeta)
    ], ListDropletActions200ApplicationJson.prototype, "meta", void 0);
    return ListDropletActions200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletActions200ApplicationJson = ListDropletActions200ApplicationJson;
var ListDropletActions401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDropletActions401ApplicationJson, _super);
    function ListDropletActions401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDropletActions401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListDropletActions401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListDropletActions401ApplicationJson.prototype, "requestId", void 0);
    return ListDropletActions401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDropletActions401ApplicationJson = ListDropletActions401ApplicationJson;
var ListDropletActionsRequest = /** @class */ (function (_super) {
    __extends(ListDropletActionsRequest, _super);
    function ListDropletActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletActionsPathParams)
    ], ListDropletActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletActionsQueryParams)
    ], ListDropletActionsRequest.prototype, "queryParams", void 0);
    return ListDropletActionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListDropletActionsRequest = ListDropletActionsRequest;
var ListDropletActionsResponse = /** @class */ (function (_super) {
    __extends(ListDropletActionsResponse, _super);
    function ListDropletActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDropletActionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListDropletActionsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDropletActionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletActions200ApplicationJson)
    ], ListDropletActionsResponse.prototype, "listDropletActions200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDropletActions401ApplicationJson)
    ], ListDropletActionsResponse.prototype, "listDropletActions401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListDropletActionsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListDropletActionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListDropletActionsResponse = ListDropletActionsResponse;

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
exports.ListAllLoadBalancersResponse = exports.ListAllLoadBalancersRequest = exports.ListAllLoadBalancers401ApplicationJson = exports.ListAllLoadBalancers200ApplicationJson = exports.ListAllLoadBalancers200ApplicationJsonMeta = exports.ListAllLoadBalancers200ApplicationJsonLinks = exports.ListAllLoadBalancers200ApplicationJsonLinksPages2 = exports.ListAllLoadBalancers200ApplicationJsonLinksPages1 = exports.ListAllLoadBalancersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllLoadBalancersQueryParams = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancersQueryParams, _super);
    function ListAllLoadBalancersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllLoadBalancersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllLoadBalancersQueryParams.prototype, "perPage", void 0);
    return ListAllLoadBalancersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancersQueryParams = ListAllLoadBalancersQueryParams;
var ListAllLoadBalancers200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancers200ApplicationJsonLinksPages1, _super);
    function ListAllLoadBalancers200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllLoadBalancers200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllLoadBalancers200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllLoadBalancers200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancers200ApplicationJsonLinksPages1 = ListAllLoadBalancers200ApplicationJsonLinksPages1;
var ListAllLoadBalancers200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancers200ApplicationJsonLinksPages2, _super);
    function ListAllLoadBalancers200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllLoadBalancers200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllLoadBalancers200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllLoadBalancers200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancers200ApplicationJsonLinksPages2 = ListAllLoadBalancers200ApplicationJsonLinksPages2;
var ListAllLoadBalancers200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancers200ApplicationJsonLinks, _super);
    function ListAllLoadBalancers200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllLoadBalancers200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllLoadBalancers200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancers200ApplicationJsonLinks = ListAllLoadBalancers200ApplicationJsonLinks;
// ListAllLoadBalancers200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllLoadBalancers200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancers200ApplicationJsonMeta, _super);
    function ListAllLoadBalancers200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllLoadBalancers200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllLoadBalancers200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancers200ApplicationJsonMeta = ListAllLoadBalancers200ApplicationJsonMeta;
var ListAllLoadBalancers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancers200ApplicationJson, _super);
    function ListAllLoadBalancers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllLoadBalancers200ApplicationJsonLinks)
    ], ListAllLoadBalancers200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_balancers", elemType: shared.Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer }),
        __metadata("design:type", Array)
    ], ListAllLoadBalancers200ApplicationJson.prototype, "loadBalancers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllLoadBalancers200ApplicationJsonMeta)
    ], ListAllLoadBalancers200ApplicationJson.prototype, "meta", void 0);
    return ListAllLoadBalancers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancers200ApplicationJson = ListAllLoadBalancers200ApplicationJson;
var ListAllLoadBalancers401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancers401ApplicationJson, _super);
    function ListAllLoadBalancers401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllLoadBalancers401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllLoadBalancers401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllLoadBalancers401ApplicationJson.prototype, "requestId", void 0);
    return ListAllLoadBalancers401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancers401ApplicationJson = ListAllLoadBalancers401ApplicationJson;
var ListAllLoadBalancersRequest = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancersRequest, _super);
    function ListAllLoadBalancersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllLoadBalancersQueryParams)
    ], ListAllLoadBalancersRequest.prototype, "queryParams", void 0);
    return ListAllLoadBalancersRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancersRequest = ListAllLoadBalancersRequest;
var ListAllLoadBalancersResponse = /** @class */ (function (_super) {
    __extends(ListAllLoadBalancersResponse, _super);
    function ListAllLoadBalancersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllLoadBalancersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllLoadBalancersResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllLoadBalancersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllLoadBalancers200ApplicationJson)
    ], ListAllLoadBalancersResponse.prototype, "listAllLoadBalancers200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllLoadBalancers401ApplicationJson)
    ], ListAllLoadBalancersResponse.prototype, "listAllLoadBalancers401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllLoadBalancersResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllLoadBalancersResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllLoadBalancersResponse = ListAllLoadBalancersResponse;

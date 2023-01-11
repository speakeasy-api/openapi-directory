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
exports.ListAllDomainRecordsResponse = exports.ListAllDomainRecordsRequest = exports.ListAllDomainRecords401ApplicationJson = exports.ListAllDomainRecords200ApplicationJson = exports.ListAllDomainRecords200ApplicationJsonMeta = exports.ListAllDomainRecords200ApplicationJsonLinks = exports.ListAllDomainRecords200ApplicationJsonLinksPages2 = exports.ListAllDomainRecords200ApplicationJsonLinksPages1 = exports.ListAllDomainRecords200ApplicationJsonDomainRecords = exports.ListAllDomainRecordsQueryParams = exports.ListAllDomainRecordsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllDomainRecordsPathParams = /** @class */ (function (_super) {
    __extends(ListAllDomainRecordsPathParams, _super);
    function ListAllDomainRecordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=domain_name" }),
        __metadata("design:type", String)
    ], ListAllDomainRecordsPathParams.prototype, "domainName", void 0);
    return ListAllDomainRecordsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecordsPathParams = ListAllDomainRecordsPathParams;
var ListAllDomainRecordsQueryParams = /** @class */ (function (_super) {
    __extends(ListAllDomainRecordsQueryParams, _super);
    function ListAllDomainRecordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ListAllDomainRecordsQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ListAllDomainRecordsQueryParams.prototype, "type", void 0);
    return ListAllDomainRecordsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecordsQueryParams = ListAllDomainRecordsQueryParams;
var ListAllDomainRecords200ApplicationJsonDomainRecords = /** @class */ (function (_super) {
    __extends(ListAllDomainRecords200ApplicationJsonDomainRecords, _super);
    function ListAllDomainRecords200ApplicationJsonDomainRecords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", Number)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], ListAllDomainRecords200ApplicationJsonDomainRecords.prototype, "weight", void 0);
    return ListAllDomainRecords200ApplicationJsonDomainRecords;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecords200ApplicationJsonDomainRecords = ListAllDomainRecords200ApplicationJsonDomainRecords;
var ListAllDomainRecords200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllDomainRecords200ApplicationJsonLinksPages1, _super);
    function ListAllDomainRecords200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllDomainRecords200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecords200ApplicationJsonLinksPages1 = ListAllDomainRecords200ApplicationJsonLinksPages1;
var ListAllDomainRecords200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllDomainRecords200ApplicationJsonLinksPages2, _super);
    function ListAllDomainRecords200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllDomainRecords200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecords200ApplicationJsonLinksPages2 = ListAllDomainRecords200ApplicationJsonLinksPages2;
var ListAllDomainRecords200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllDomainRecords200ApplicationJsonLinks, _super);
    function ListAllDomainRecords200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllDomainRecords200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllDomainRecords200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecords200ApplicationJsonLinks = ListAllDomainRecords200ApplicationJsonLinks;
// ListAllDomainRecords200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllDomainRecords200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllDomainRecords200ApplicationJsonMeta, _super);
    function ListAllDomainRecords200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllDomainRecords200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllDomainRecords200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecords200ApplicationJsonMeta = ListAllDomainRecords200ApplicationJsonMeta;
var ListAllDomainRecords200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllDomainRecords200ApplicationJson, _super);
    function ListAllDomainRecords200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain_records", elemType: ListAllDomainRecords200ApplicationJsonDomainRecords }),
        __metadata("design:type", Array)
    ], ListAllDomainRecords200ApplicationJson.prototype, "domainRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllDomainRecords200ApplicationJsonLinks)
    ], ListAllDomainRecords200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllDomainRecords200ApplicationJsonMeta)
    ], ListAllDomainRecords200ApplicationJson.prototype, "meta", void 0);
    return ListAllDomainRecords200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecords200ApplicationJson = ListAllDomainRecords200ApplicationJson;
var ListAllDomainRecords401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllDomainRecords401ApplicationJson, _super);
    function ListAllDomainRecords401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllDomainRecords401ApplicationJson.prototype, "requestId", void 0);
    return ListAllDomainRecords401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecords401ApplicationJson = ListAllDomainRecords401ApplicationJson;
var ListAllDomainRecordsRequest = /** @class */ (function (_super) {
    __extends(ListAllDomainRecordsRequest, _super);
    function ListAllDomainRecordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDomainRecordsPathParams)
    ], ListAllDomainRecordsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDomainRecordsQueryParams)
    ], ListAllDomainRecordsRequest.prototype, "queryParams", void 0);
    return ListAllDomainRecordsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecordsRequest = ListAllDomainRecordsRequest;
var ListAllDomainRecordsResponse = /** @class */ (function (_super) {
    __extends(ListAllDomainRecordsResponse, _super);
    function ListAllDomainRecordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllDomainRecordsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllDomainRecordsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllDomainRecordsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDomainRecords200ApplicationJson)
    ], ListAllDomainRecordsResponse.prototype, "listAllDomainRecords200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDomainRecords401ApplicationJson)
    ], ListAllDomainRecordsResponse.prototype, "listAllDomainRecords401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllDomainRecordsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllDomainRecordsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainRecordsResponse = ListAllDomainRecordsResponse;

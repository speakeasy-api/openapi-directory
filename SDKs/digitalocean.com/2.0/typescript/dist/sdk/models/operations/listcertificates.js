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
exports.ListCertificatesResponse = exports.ListCertificatesRequest = exports.ListCertificates401ApplicationJson = exports.ListCertificates200ApplicationJson = exports.ListCertificates200ApplicationJsonMeta = exports.ListCertificates200ApplicationJsonLinks = exports.ListCertificates200ApplicationJsonLinksPages2 = exports.ListCertificates200ApplicationJsonLinksPages1 = exports.ListCertificates200ApplicationJsonCertificates = exports.ListCertificates200ApplicationJsonCertificatesTypeEnum = exports.ListCertificates200ApplicationJsonCertificatesStateEnum = exports.ListCertificatesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(ListCertificatesQueryParams, _super);
    function ListCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListCertificatesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListCertificatesQueryParams.prototype, "perPage", void 0);
    return ListCertificatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCertificatesQueryParams = ListCertificatesQueryParams;
var ListCertificates200ApplicationJsonCertificatesStateEnum;
(function (ListCertificates200ApplicationJsonCertificatesStateEnum) {
    ListCertificates200ApplicationJsonCertificatesStateEnum["Pending"] = "pending";
    ListCertificates200ApplicationJsonCertificatesStateEnum["Verified"] = "verified";
    ListCertificates200ApplicationJsonCertificatesStateEnum["Error"] = "error";
})(ListCertificates200ApplicationJsonCertificatesStateEnum = exports.ListCertificates200ApplicationJsonCertificatesStateEnum || (exports.ListCertificates200ApplicationJsonCertificatesStateEnum = {}));
var ListCertificates200ApplicationJsonCertificatesTypeEnum;
(function (ListCertificates200ApplicationJsonCertificatesTypeEnum) {
    ListCertificates200ApplicationJsonCertificatesTypeEnum["Custom"] = "custom";
    ListCertificates200ApplicationJsonCertificatesTypeEnum["LetsEncrypt"] = "lets_encrypt";
})(ListCertificates200ApplicationJsonCertificatesTypeEnum = exports.ListCertificates200ApplicationJsonCertificatesTypeEnum || (exports.ListCertificates200ApplicationJsonCertificatesTypeEnum = {}));
var ListCertificates200ApplicationJsonCertificates = /** @class */ (function (_super) {
    __extends(ListCertificates200ApplicationJsonCertificates, _super);
    function ListCertificates200ApplicationJsonCertificates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dns_names" }),
        __metadata("design:type", Array)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "dnsNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=not_after" }),
        __metadata("design:type", Date)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "notAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sha1_fingerprint" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "sha1Fingerprint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonCertificates.prototype, "type", void 0);
    return ListCertificates200ApplicationJsonCertificates;
}(utils_1.SpeakeasyBase));
exports.ListCertificates200ApplicationJsonCertificates = ListCertificates200ApplicationJsonCertificates;
var ListCertificates200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListCertificates200ApplicationJsonLinksPages1, _super);
    function ListCertificates200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListCertificates200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListCertificates200ApplicationJsonLinksPages1 = ListCertificates200ApplicationJsonLinksPages1;
var ListCertificates200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListCertificates200ApplicationJsonLinksPages2, _super);
    function ListCertificates200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListCertificates200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListCertificates200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListCertificates200ApplicationJsonLinksPages2 = ListCertificates200ApplicationJsonLinksPages2;
var ListCertificates200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListCertificates200ApplicationJsonLinks, _super);
    function ListCertificates200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListCertificates200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListCertificates200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListCertificates200ApplicationJsonLinks = ListCertificates200ApplicationJsonLinks;
// ListCertificates200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListCertificates200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListCertificates200ApplicationJsonMeta, _super);
    function ListCertificates200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListCertificates200ApplicationJsonMeta.prototype, "total", void 0);
    return ListCertificates200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListCertificates200ApplicationJsonMeta = ListCertificates200ApplicationJsonMeta;
var ListCertificates200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListCertificates200ApplicationJson, _super);
    function ListCertificates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificates", elemType: ListCertificates200ApplicationJsonCertificates }),
        __metadata("design:type", Array)
    ], ListCertificates200ApplicationJson.prototype, "certificates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListCertificates200ApplicationJsonLinks)
    ], ListCertificates200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListCertificates200ApplicationJsonMeta)
    ], ListCertificates200ApplicationJson.prototype, "meta", void 0);
    return ListCertificates200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListCertificates200ApplicationJson = ListCertificates200ApplicationJson;
var ListCertificates401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListCertificates401ApplicationJson, _super);
    function ListCertificates401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCertificates401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListCertificates401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListCertificates401ApplicationJson.prototype, "requestId", void 0);
    return ListCertificates401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListCertificates401ApplicationJson = ListCertificates401ApplicationJson;
var ListCertificatesRequest = /** @class */ (function (_super) {
    __extends(ListCertificatesRequest, _super);
    function ListCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCertificatesQueryParams)
    ], ListCertificatesRequest.prototype, "queryParams", void 0);
    return ListCertificatesRequest;
}(utils_1.SpeakeasyBase));
exports.ListCertificatesRequest = ListCertificatesRequest;
var ListCertificatesResponse = /** @class */ (function (_super) {
    __extends(ListCertificatesResponse, _super);
    function ListCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListCertificatesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCertificatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCertificates200ApplicationJson)
    ], ListCertificatesResponse.prototype, "listCertificates200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCertificates401ApplicationJson)
    ], ListCertificatesResponse.prototype, "listCertificates401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListCertificatesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListCertificatesResponse;
}(utils_1.SpeakeasyBase));
exports.ListCertificatesResponse = ListCertificatesResponse;

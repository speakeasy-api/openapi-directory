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
exports.ListAllDomainsResponseOutput = exports.ListAllDomains401ApplicationJson = exports.ListAllDomains200ApplicationJsonOutput = exports.ListAllDomains200ApplicationJsonMeta = exports.ListAllDomains200ApplicationJsonLinks = exports.ListAllDomains200ApplicationJsonLinksPages2 = exports.ListAllDomains200ApplicationJsonLinksPages1 = exports.ListAllDomains200ApplicationJsonDomainsOutput = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllDomains200ApplicationJsonDomainsOutput = /** @class */ (function (_super) {
    __extends(ListAllDomains200ApplicationJsonDomainsOutput, _super);
    function ListAllDomains200ApplicationJsonDomainsOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllDomains200ApplicationJsonDomainsOutput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], ListAllDomains200ApplicationJsonDomainsOutput.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zone_file" }),
        __metadata("design:type", String)
    ], ListAllDomains200ApplicationJsonDomainsOutput.prototype, "zoneFile", void 0);
    return ListAllDomains200ApplicationJsonDomainsOutput;
}(utils_1.SpeakeasyBase));
exports.ListAllDomains200ApplicationJsonDomainsOutput = ListAllDomains200ApplicationJsonDomainsOutput;
var ListAllDomains200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllDomains200ApplicationJsonLinksPages1, _super);
    function ListAllDomains200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllDomains200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllDomains200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllDomains200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllDomains200ApplicationJsonLinksPages1 = ListAllDomains200ApplicationJsonLinksPages1;
var ListAllDomains200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllDomains200ApplicationJsonLinksPages2, _super);
    function ListAllDomains200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllDomains200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllDomains200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllDomains200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllDomains200ApplicationJsonLinksPages2 = ListAllDomains200ApplicationJsonLinksPages2;
var ListAllDomains200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllDomains200ApplicationJsonLinks, _super);
    function ListAllDomains200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllDomains200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllDomains200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllDomains200ApplicationJsonLinks = ListAllDomains200ApplicationJsonLinks;
// ListAllDomains200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllDomains200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllDomains200ApplicationJsonMeta, _super);
    function ListAllDomains200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllDomains200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllDomains200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllDomains200ApplicationJsonMeta = ListAllDomains200ApplicationJsonMeta;
var ListAllDomains200ApplicationJsonOutput = /** @class */ (function (_super) {
    __extends(ListAllDomains200ApplicationJsonOutput, _super);
    function ListAllDomains200ApplicationJsonOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domains", elemType: ListAllDomains200ApplicationJsonDomainsOutput }),
        __metadata("design:type", Array)
    ], ListAllDomains200ApplicationJsonOutput.prototype, "domains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllDomains200ApplicationJsonLinks)
    ], ListAllDomains200ApplicationJsonOutput.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllDomains200ApplicationJsonMeta)
    ], ListAllDomains200ApplicationJsonOutput.prototype, "meta", void 0);
    return ListAllDomains200ApplicationJsonOutput;
}(utils_1.SpeakeasyBase));
exports.ListAllDomains200ApplicationJsonOutput = ListAllDomains200ApplicationJsonOutput;
var ListAllDomains401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllDomains401ApplicationJson, _super);
    function ListAllDomains401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllDomains401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllDomains401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllDomains401ApplicationJson.prototype, "requestId", void 0);
    return ListAllDomains401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllDomains401ApplicationJson = ListAllDomains401ApplicationJson;
var ListAllDomainsResponseOutput = /** @class */ (function (_super) {
    __extends(ListAllDomainsResponseOutput, _super);
    function ListAllDomainsResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllDomainsResponseOutput.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllDomainsResponseOutput.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllDomainsResponseOutput.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDomains200ApplicationJsonOutput)
    ], ListAllDomainsResponseOutput.prototype, "listAllDomains200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDomains401ApplicationJson)
    ], ListAllDomainsResponseOutput.prototype, "listAllDomains401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllDomainsResponseOutput.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllDomainsResponseOutput;
}(utils_1.SpeakeasyBase));
exports.ListAllDomainsResponseOutput = ListAllDomainsResponseOutput;

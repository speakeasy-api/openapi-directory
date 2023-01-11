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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
var utils_1 = require("../../../internal/utils");
var datalocationresource_1 = require("./datalocationresource");
var databaseresource_1 = require("./databaseresource");
var lftagkeyresource_1 = require("./lftagkeyresource");
var lftagpolicyresource_1 = require("./lftagpolicyresource");
var tableresource_1 = require("./tableresource");
var tablewithcolumnsresource_1 = require("./tablewithcolumnsresource");
// Resource
/**
 * A structure for the resource.
**/
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Catalog" }),
        __metadata("design:type", Object)
    ], Resource.prototype, "catalog", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DataLocation" }),
        __metadata("design:type", datalocationresource_1.DataLocationResource)
    ], Resource.prototype, "dataLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Database" }),
        __metadata("design:type", databaseresource_1.DatabaseResource)
    ], Resource.prototype, "database", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LFTag" }),
        __metadata("design:type", lftagkeyresource_1.LfTagKeyResource)
    ], Resource.prototype, "lfTag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LFTagPolicy" }),
        __metadata("design:type", lftagpolicyresource_1.LfTagPolicyResource)
    ], Resource.prototype, "lfTagPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Table" }),
        __metadata("design:type", tableresource_1.TableResource)
    ], Resource.prototype, "table", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TableWithColumns" }),
        __metadata("design:type", tablewithcolumnsresource_1.TableWithColumnsResource)
    ], Resource.prototype, "tableWithColumns", void 0);
    return Resource;
}(utils_1.SpeakeasyBase));
exports.Resource = Resource;

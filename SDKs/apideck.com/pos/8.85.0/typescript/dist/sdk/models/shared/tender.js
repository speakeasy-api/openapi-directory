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
exports.TenderInput = exports.Tender = void 0;
var utils_1 = require("../../../internal/utils");
var Tender = /** @class */ (function (_super) {
    __extends(Tender, _super);
    function Tender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Tender.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allows_tipping" }),
        __metadata("design:type", Boolean)
    ], Tender.prototype, "allowsTipping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Tender.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Tender.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editable" }),
        __metadata("design:type", Boolean)
    ], Tender.prototype, "editable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], Tender.prototype, "hidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Tender.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], Tender.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Tender.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=opens_cash_drawer" }),
        __metadata("design:type", Boolean)
    ], Tender.prototype, "opensCashDrawer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Tender.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Tender.prototype, "updatedBy", void 0);
    return Tender;
}(utils_1.SpeakeasyBase));
exports.Tender = Tender;
var TenderInput = /** @class */ (function (_super) {
    __extends(TenderInput, _super);
    function TenderInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], TenderInput.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allows_tipping" }),
        __metadata("design:type", Boolean)
    ], TenderInput.prototype, "allowsTipping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editable" }),
        __metadata("design:type", Boolean)
    ], TenderInput.prototype, "editable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], TenderInput.prototype, "hidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], TenderInput.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], TenderInput.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=opens_cash_drawer" }),
        __metadata("design:type", Boolean)
    ], TenderInput.prototype, "opensCashDrawer", void 0);
    return TenderInput;
}(utils_1.SpeakeasyBase));
exports.TenderInput = TenderInput;

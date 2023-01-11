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
exports.CreateClassifierRequest = void 0;
var utils_1 = require("../../../internal/utils");
var createcsvclassifierrequest_1 = require("./createcsvclassifierrequest");
var creategrokclassifierrequest_1 = require("./creategrokclassifierrequest");
var createjsonclassifierrequest_1 = require("./createjsonclassifierrequest");
var createxmlclassifierrequest_1 = require("./createxmlclassifierrequest");
var CreateClassifierRequest = /** @class */ (function (_super) {
    __extends(CreateClassifierRequest, _super);
    function CreateClassifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CsvClassifier" }),
        __metadata("design:type", createcsvclassifierrequest_1.CreateCsvClassifierRequest)
    ], CreateClassifierRequest.prototype, "csvClassifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GrokClassifier" }),
        __metadata("design:type", creategrokclassifierrequest_1.CreateGrokClassifierRequest)
    ], CreateClassifierRequest.prototype, "grokClassifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JsonClassifier" }),
        __metadata("design:type", createjsonclassifierrequest_1.CreateJsonClassifierRequest)
    ], CreateClassifierRequest.prototype, "jsonClassifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=XMLClassifier" }),
        __metadata("design:type", createxmlclassifierrequest_1.CreateXmlClassifierRequest)
    ], CreateClassifierRequest.prototype, "xmlClassifier", void 0);
    return CreateClassifierRequest;
}(utils_1.SpeakeasyBase));
exports.CreateClassifierRequest = CreateClassifierRequest;

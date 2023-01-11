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
exports.Classifier = void 0;
var utils_1 = require("../../../internal/utils");
var csvclassifier_1 = require("./csvclassifier");
var grokclassifier_1 = require("./grokclassifier");
var jsonclassifier_1 = require("./jsonclassifier");
var xmlclassifier_1 = require("./xmlclassifier");
// Classifier
/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>
**/
var Classifier = /** @class */ (function (_super) {
    __extends(Classifier, _super);
    function Classifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CsvClassifier" }),
        __metadata("design:type", csvclassifier_1.CsvClassifier)
    ], Classifier.prototype, "csvClassifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GrokClassifier" }),
        __metadata("design:type", grokclassifier_1.GrokClassifier)
    ], Classifier.prototype, "grokClassifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JsonClassifier" }),
        __metadata("design:type", jsonclassifier_1.JsonClassifier)
    ], Classifier.prototype, "jsonClassifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=XMLClassifier" }),
        __metadata("design:type", xmlclassifier_1.XmlClassifier)
    ], Classifier.prototype, "xmlClassifier", void 0);
    return Classifier;
}(utils_1.SpeakeasyBase));
exports.Classifier = Classifier;

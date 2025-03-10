"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentReadFeatureTypesEnum = void 0;
/**
 * <p>Specifies the type of Amazon Textract features to apply. If you chose <code>TEXTRACT_ANALYZE_DOCUMENT</code> as the read action, you must specify one or both of the following values:</p> <ul> <li> <p> <code>TABLES</code> - Returns additional information about any tables that are detected in the input document. </p> </li> <li> <p> <code>FORMS</code> - Returns additional information about any forms that are detected in the input document. </p> </li> </ul>
 */
var DocumentReadFeatureTypesEnum;
(function (DocumentReadFeatureTypesEnum) {
    DocumentReadFeatureTypesEnum["Tables"] = "TABLES";
    DocumentReadFeatureTypesEnum["Forms"] = "FORMS";
})(DocumentReadFeatureTypesEnum = exports.DocumentReadFeatureTypesEnum || (exports.DocumentReadFeatureTypesEnum = {}));

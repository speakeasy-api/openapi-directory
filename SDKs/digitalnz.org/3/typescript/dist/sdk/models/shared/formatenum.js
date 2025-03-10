"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatEnum = void 0;
/**
 * Note - There is a small difference with some field names in the response between JSON and XML.
 *
 * @remarks
 * When a field name has more than one word, JSON format will separate the words with an underscore, eg. "content_partner", whereas XML uses a hyphenated naming convention, eg. "content-partner".
 *
 */
var FormatEnum;
(function (FormatEnum) {
    FormatEnum["Json"] = "json";
    FormatEnum["Xml"] = "xml";
})(FormatEnum = exports.FormatEnum || (exports.FormatEnum = {}));

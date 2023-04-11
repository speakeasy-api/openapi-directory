/**
 * Note - There is a small difference with some field names in the response between JSON and XML.
 *
 * @remarks
 * When a field name has more than one word, JSON format will separate the words with an underscore, eg. "content_partner", whereas XML uses a hyphenated naming convention, eg. "content-partner".
 *
 */
export declare enum FormatEnum {
    Json = "json",
    Xml = "xml"
}

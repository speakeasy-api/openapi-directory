/**
 * * path: if the parameter must be pass in the path uri
 *
 * @remarks
 * * header: if the parameter must be passed in http header
 * * query: if the parameter must be passed in querystring
 * * body: if the parameter must be passed in the body
 * * file: if the parameter must be passed in a multipart/form-data (https://swagger.io/docs/specification/2-0/file-upload/)
 *
 */
export declare enum ParameterInEnum {
    Path = "path",
    Header = "header",
    Query = "query",
    Body = "body",
    File = "file"
}

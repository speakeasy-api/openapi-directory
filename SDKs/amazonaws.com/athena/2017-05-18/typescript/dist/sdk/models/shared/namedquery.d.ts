import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A query, where <code>QueryString</code> contains the SQL statements that make up the query.
 */
export declare class NamedQuery extends SpeakeasyBase {
    database: string;
    description?: string;
    name: string;
    namedQueryId?: string;
    queryString: string;
    workGroup?: string;
}

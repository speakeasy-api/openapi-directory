import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.
 */
export declare class DescribeIndexFieldsRequest extends SpeakeasyBase {
    deployed?: boolean;
    domainName: string;
    fieldNames?: string[];
}

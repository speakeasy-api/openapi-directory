import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that contains information about one of this source account's links to a monitoring account.
 */
export declare class ListLinksItem extends SpeakeasyBase {
    arn?: string;
    id?: string;
    label?: string;
    resourceTypes?: string[];
    sinkArn?: string;
}

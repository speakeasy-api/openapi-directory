import { SpeakeasyBase } from "../../../internal/utils";
import { UserStackAssociation } from "./userstackassociation";
/**
 * Success
 */
export declare class DescribeUserStackAssociationsResult extends SpeakeasyBase {
    nextToken?: string;
    userStackAssociations?: UserStackAssociation[];
}

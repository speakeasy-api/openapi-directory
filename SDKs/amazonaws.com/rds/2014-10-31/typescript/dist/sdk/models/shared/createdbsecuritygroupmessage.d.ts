import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateDBSecurityGroupMessage extends SpeakeasyBase {
    dbSecurityGroupDescription: string;
    dbSecurityGroupName: string;
    tags?: TagList[];
}

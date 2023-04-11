import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { ReadAccessTypeEnum } from "./readaccesstypeenum";
/**
 * Provides user and group information for <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">user context filtering</a>.
 */
export declare class Principal extends SpeakeasyBase {
    access: ReadAccessTypeEnum;
    dataSourceId?: string;
    name: string;
    type: PrincipalTypeEnum;
}

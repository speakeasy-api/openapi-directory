import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverAutodefinedReverseStatusEnum } from "./resolverautodefinedreversestatusenum";
/**
 * A complex type that contains information about a Resolver configuration for a VPC.
 */
export declare class ResolverConfig extends SpeakeasyBase {
    autodefinedReverse?: ResolverAutodefinedReverseStatusEnum;
    id?: string;
    ownerId?: string;
    resourceId?: string;
}

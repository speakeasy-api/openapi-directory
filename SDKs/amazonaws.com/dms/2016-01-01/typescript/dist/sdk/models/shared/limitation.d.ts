import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides information about the limitations of target Amazon Web Services engines.</p> <p>Your source database might include features that the target Amazon Web Services engine doesn't support. Fleet Advisor lists these features as limitations. You should consider these limitations during database migration. For each limitation, Fleet Advisor recommends an action that you can take to address or avoid this limitation.</p>
 */
export declare class Limitation extends SpeakeasyBase {
    databaseId?: string;
    description?: string;
    engineName?: string;
    impact?: string;
    name?: string;
    type?: string;
}

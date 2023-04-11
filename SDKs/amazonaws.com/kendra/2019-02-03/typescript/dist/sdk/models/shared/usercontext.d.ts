import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceGroup } from "./datasourcegroup";
/**
 * <p>Provides information about the user context for an Amazon Kendra index.</p> <p>User context filtering is a kind of personalized search with the benefit of controlling access to documents. For example, not all teams that search the company portal for information should access top-secret company documents, nor are these documents relevant to all users. Only specific users or groups of teams given access to top-secret documents should see these documents in their search results.</p> <p>You provide one of the following:</p> <ul> <li> <p>User token</p> </li> <li> <p>User ID, the groups the user belongs to, and any data sources the groups can access.</p> </li> </ul> <p>If you provide both, an exception is thrown.</p>
 */
export declare class UserContext extends SpeakeasyBase {
    dataSourceGroups?: DataSourceGroup[];
    groups?: string[];
    token?: string;
    userId?: string;
}

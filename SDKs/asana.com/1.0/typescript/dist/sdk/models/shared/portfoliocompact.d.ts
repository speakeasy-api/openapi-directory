import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
 * Portfolios have some restrictions on size. Each portfolio has a max of 250 items and, like projects, a max of 20 custom fields.
**/
export declare class PortfolioCompact extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class OnboardingTheme extends SpeakeasyBase {
    /**
     * The creation date of the theme.
     */
    createdAt: Date;
    /**
     * The description of the theme.
     */
    description?: string;
    /**
     * The unique identifier of the theme.
     */
    id: string;
    /**
     * The properties of the theme.
     */
    properties: Record<string, string>;
    /**
     * The date when the theme was last updated.
     */
    updatedAt?: Date;
}

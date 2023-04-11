import { SpeakeasyBase } from "../../../internal/utils";
import { OnboardingTheme } from "./onboardingtheme";
/**
 * OK - the request has succeeded.
 */
export declare class OnboardingThemes extends SpeakeasyBase {
    /**
     * The next page. Only present if there is a next page.
     */
    next?: string;
    /**
     * The previous page. Only present if there is a previous page.
     */
    previous?: string;
    /**
     * List of onboarding themes.
     */
    themes: OnboardingTheme[];
}

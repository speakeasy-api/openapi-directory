package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CheckSuitePreference
 * Check suite configuration preferences for a repository.
**/
public class CheckSuitePreference {
    @JsonProperty("preferences")
    public CheckSuitePreferencePreferences preferences;
    public CheckSuitePreference withPreferences(CheckSuitePreferencePreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonProperty("repository")
    public MinimalRepository repository;
    public CheckSuitePreference withRepository(MinimalRepository repository) {
        this.repository = repository;
        return this;
    }
}
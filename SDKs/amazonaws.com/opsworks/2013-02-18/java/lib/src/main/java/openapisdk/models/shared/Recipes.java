package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Recipes
 * <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p>
**/
public class Recipes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configure")
    public String[] configure;
    public Recipes withConfigure(String[] configure) {
        this.configure = configure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deploy")
    public String[] deploy;
    public Recipes withDeploy(String[] deploy) {
        this.deploy = deploy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Setup")
    public String[] setup;
    public Recipes withSetup(String[] setup) {
        this.setup = setup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Shutdown")
    public String[] shutdown;
    public Recipes withShutdown(String[] shutdown) {
        this.shutdown = shutdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Undeploy")
    public String[] undeploy;
    public Recipes withUndeploy(String[] undeploy) {
        this.undeploy = undeploy;
        return this;
    }
}
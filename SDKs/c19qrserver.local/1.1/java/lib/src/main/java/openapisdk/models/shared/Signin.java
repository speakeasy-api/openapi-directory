package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Signin
 * Payload of signin object
**/
public class Signin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dt")
    public Double dt;
    public Signin withDt(Double dt) {
        this.dt = dt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Signin withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Signin withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Signin withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("phone")
    public String phone;
    public Signin withPhone(String phone) {
        this.phone = phone;
        return this;
    }
}